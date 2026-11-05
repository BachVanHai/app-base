import { fetchEventSource } from '@microsoft/fetch-event-source'
import React from 'react'
import Axios from 'axios'
import 'axios-extensions' // side-effect import kept from legacy-bundle-final (adapter enhancers no longer used)
import { generateUUID } from '.'
import {API_BASE_URL, API_TIME_OUT, API_BASE_SIT_URL, API_LOGIN_URL } from '../configs/app-configs'
import {changeActionExpireTime, LOGOUT_ACTION} from '../redux/actions/auth'
import { HIDE_LOADING_BAR, SHOW_LOADING_BAR, SHOW_ERROR_MODAL } from '../redux/actions/ui'
import { FormattedMessage } from 'react-intl'
import moment from "moment";
import {history} from "../history";

const HttpClient = Axios.create({
  timeout: API_TIME_OUT,
})
HttpClient.defaults.headers['Content-Type'] = 'application/json'

export const isResponseData = (data) => {
  if (!data || 'object' !== typeof data || true === Array.isArray(data)) {
    return false
  }
  return (
    Object.prototype.hasOwnProperty.call(data, 'data') &&
    (Object.prototype.hasOwnProperty.call(data, 'errCode') ||
      Object.prototype.hasOwnProperty.call(data, 'clientMessageId') ||
      Object.prototype.hasOwnProperty.call(data, 'errMsg'))
  )
}

export const unwrapResponseData = (response) => {
  if (!response || !response.data || response.responseData) {
    return response
  }
  const rawData = response.data
  if (true === isResponseData(rawData)) {
    const unwrapped = rawData.data
    if (unwrapped && 'object' === typeof unwrapped && true === Object.isExtensible(unwrapped)) {
      if (!Object.prototype.hasOwnProperty.call(unwrapped, 'data')) {
        Object.defineProperty(unwrapped, 'data', {
          get() {
            return this
          },
          configurable: true,
          enumerable: false,
        })
      }
      if (
        !Object.prototype.hasOwnProperty.call(unwrapped, 'clientMessageId') &&
        undefined !== rawData.clientMessageId
      ) {
        Object.defineProperty(unwrapped, 'clientMessageId', {
          value: rawData.clientMessageId,
          configurable: true,
          writable: true,
          enumerable: false,
        })
      }
      if (
        !Object.prototype.hasOwnProperty.call(unwrapped, 'errCode') &&
        undefined !== rawData.errCode
      ) {
        Object.defineProperty(unwrapped, 'errCode', {
          value: rawData.errCode,
          configurable: true,
          writable: true,
          enumerable: false,
        })
      }
      if (
        !Object.prototype.hasOwnProperty.call(unwrapped, 'errMsg') &&
        undefined !== rawData.errMsg
      ) {
        Object.defineProperty(unwrapped, 'errMsg', {
          value: rawData.errMsg,
          configurable: true,
          writable: true,
          enumerable: false,
        })
      }
    }
    response.responseData = rawData
    if (undefined !== rawData.clientMessageId) {
      response.clientMessageId = rawData.clientMessageId
    }
    if (undefined !== rawData.errCode) {
      response.errCode = rawData.errCode
    }
    if (undefined !== rawData.errMsg) {
      response.errMsg = rawData.errMsg
    }
    response.data = unwrapped
  }
  return response
}
try {
  if (!Object.prototype.hasOwnProperty.call(Boolean.prototype, 'data')) {
    Object.defineProperty(Boolean.prototype, 'data', {
      get() {
        return this.valueOf()
      },
      configurable: true,
      enumerable: false,
    })
  }
  if (!Object.prototype.hasOwnProperty.call(Number.prototype, 'data')) {
    Object.defineProperty(Number.prototype, 'data', {
      get() {
        return this.valueOf()
      },
      configurable: true,
      enumerable: false,
    })
  }
  if (!Object.prototype.hasOwnProperty.call(String.prototype, 'data')) {
    Object.defineProperty(String.prototype, 'data', {
      get() {
        return this.valueOf()
      },
      configurable: true,
      enumerable: false,
    })
  }
} catch (e) {
  // ignore in restricted environments
}
HttpClient.interceptors.response.use(unwrapResponseData)

export let isLoggingOut = false

export const setUpHttpClient = (store, apiBaseUrl) => {
  let deviceId = localStorage.getItem('deviceId')
  let language = localStorage.getItem('language')
  if (!deviceId) {
    deviceId = generateUUID()
    localStorage.setItem('deviceId', deviceId)
  }
  if (!language) {
    localStorage.setItem('language', 'vi')
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem('latitude', position.coords.latitude)
      localStorage.setItem('longitude', position.coords.longitude)
    })
  }
  HttpClient.defaults.baseURL = apiBaseUrl || API_BASE_URL
  HttpClient.interceptors.request.use((config) => {
    const token = store.getState().auth.guest?.authToken || store.getState().auth.authToken
    const sessionExpireTime = store.getState().auth.sessionExpireTime
    language = localStorage.getItem('language')
    if (token) {
      store.dispatch(changeActionExpireTime())
      config.headers.Authorization = `Bearer ${token}`
      const isSessionExpired = moment().isAfter(moment(sessionExpireTime))
      if (sessionExpireTime && isSessionExpired) {
        store.dispatch({
          type: SHOW_ERROR_MODAL,
          payload: {
            message: <FormattedMessage id='common.sessionExpired' />,
            errorCode: null,
          },
        })
        store.dispatch({
          type: LOGOUT_ACTION,
        })
        history.push('/login')
        return
      }
    }
    config.headers.appId = store.getState().customizer.appId
    config.headers.appVersion = 'v1'
    config.headers.latitude = localStorage.getItem('latitude')
    config.headers.longitude = localStorage.getItem('longitude')
    config.headers.deviceId = deviceId
    config.headers['Accept-Language'] = language
    config.requestUUID = generateUUID()
    if (!config.isBackgroundRequest) {
      store.dispatch({
        type: SHOW_LOADING_BAR,
        payload: config.requestUUID,
      })
    }
    return config
  })
  HttpClient.interceptors.response.use(
    (response) => {
      if (response && !response.config.isBackgroundRequest) {
        store.dispatch({
          type: HIDE_LOADING_BAR,
          payload: response.config.requestUUID,
        })
      }
      return unwrapResponseData(response)
    },
    (e) => {
      store.dispatch({
        type: HIDE_LOADING_BAR,
        payload: 'ALL',
      })
      if (!e.response) {
        return e
      }
      switch (e.response.status) {
        case 400:
        case 500: {
          const clientMessageId =
            e.response.data?.clientMessageId ||
            e.response.config?.headers?.clientmessageid ||
            e.response.config?.headers?.clientMessageId ||
            ''
          let serverMessage = null
          if (e.response.data && 'object' === typeof e.response.data) {
            serverMessage =
              e.response.data.errMsg ||
              e.response.data.message ||
              e.response.data.detail ||
              e.response.data.error ||
              null
          } else if ('string' === typeof e.response.data && '' !== e.response.data.trim()) {
            serverMessage = e.response.data.trim()
          }
          let errorMessage
          if (null !== serverMessage && '' !== serverMessage) {
            errorMessage = serverMessage
          } else if (500 === e.response.status) {
            errorMessage = <FormattedMessage id='common.error.500' />
          } else {
            errorMessage = <FormattedMessage id='common.error.400' />
          }
          store.dispatch({
            type: SHOW_ERROR_MODAL,
            payload: {
              message: errorMessage,
              errorCode: clientMessageId || null,
            },
          })
          break
        }
        case 401: {
          const isAuthRequest = Boolean(
            e.response.config?.url && e.response.config.url.includes(API_LOGIN_URL)
          )
          const isLoginPage = Boolean(
            window.location.pathname && window.location.pathname.includes('/login')
          )
          if (true === isAuthRequest || true === isLoginPage) {
            return e.response
          }
          if (false === isLoggingOut) {
            isLoggingOut = true
            const message = (e.response.data &&
              (e.response.data.message || e.response.data.errMsg)) || (
              <FormattedMessage id='common.sessionExpired' />
            )
            store.dispatch({
              type: SHOW_ERROR_MODAL,
              payload: {
                message: message,
                errorCode: null,
              },
            })
            store.dispatch({
              type: LOGOUT_ACTION,
            })
            const redirectUrl = encodeURIComponent(
              window.location.pathname + window.location.search
            )
            history.push(`/login?redirect=${redirectUrl}`)
            setTimeout(() => {
              isLoggingOut = false
            }, 2000)
          }
          break
        }
        case 403: {
          if ('Forbidden' === e.response.data?.error) {
            return e.response
          }
          store.dispatch({
            type: SHOW_ERROR_MODAL,
            payload: {
              message: e.response.data.message || 'Bạn không có quyền thực hiện thao tác này.',
              errorCode: null,
            },
          })
          store.dispatch({
            type: LOGOUT_ACTION,
          })
          history.push('/login')
          break
        }
      }
      store.dispatch({
        type: HIDE_LOADING_BAR,
        payload: e.response.config.requestUUID,
      })
      return e.response
    }
  )
}

let _eventSourceStore

let _eventSourceBaseUrl

export const setUpEventSourceClient = (store, sseBaseUrl) => {
  _eventSourceStore = store
  _eventSourceBaseUrl = sseBaseUrl || API_BASE_SIT_URL
}

export const buildEventSourceRequestHeaders = (store) => {
  const token = store.getState().auth.guest?.authToken || store.getState().auth.authToken
  const sessionExpireTime = store.getState().auth.sessionExpireTime
  const language = localStorage.getItem('language')
  const deviceId = localStorage.getItem('deviceId')
  const headers = {}
  if (token) {
    store.dispatch(changeActionExpireTime())
    headers.Authorization = `Bearer ${token}`
    const isSessionExpired = moment().isAfter(moment(sessionExpireTime))
    if (sessionExpireTime && isSessionExpired) {
      store.dispatch({
        type: SHOW_ERROR_MODAL,
        payload: {
          message: <FormattedMessage id='common.sessionExpired' />,
          errorCode: null,
        },
      })
      store.dispatch({
        type: LOGOUT_ACTION,
      })
      history.push('/login')
      return null
    }
  }
  headers.appId = store.getState().customizer.appId
  headers.appVersion = 'v1'
  headers.latitude = localStorage.getItem('latitude')
  headers.longitude = localStorage.getItem('longitude')
  headers.deviceId = deviceId
  headers['Accept-Language'] = language
  return headers
}

export const EventSourceClient = {
  connect(path, options = {}) {
    const store = _eventSourceStore
    const {
      onopen: userOnOpen,
      headers: userHeaders,
      baseUrl: optionsBaseUrl,
      sseBaseUrl: optionsSseBaseUrl,
      ...rest
    } = options
    const effectiveBaseUrl = optionsBaseUrl || optionsSseBaseUrl || _eventSourceBaseUrl
    if (!store || !effectiveBaseUrl) {
      throw new Error(
        'EventSourceClient is not configured. Call setUpEventSourceClient first, or pass baseUrl (or sseBaseUrl) in connect options.'
      )
    }
    const builtHeaders = buildEventSourceRequestHeaders(store)
    if (builtHeaders === null) {
      return null
    }
    const baseNormalized = String(effectiveBaseUrl).replace(/\/+$/, '')
    const pathPart = path.startsWith('/') ? path : `/${path}`
    const fullUrl = `${baseNormalized}${pathPart}`
    return fetchEventSource(fullUrl, {
      ...rest,
      headers: {
        ...builtHeaders,
        ...userHeaders,
        clientMessageId: (userHeaders && userHeaders.clientMessageId) || generateUUID(),
      },
      onopen: async (response) => {
        if (response.status === 403) {
          let data = {}
          try {
            const ct = response.headers.get('content-type')
            if (ct && ct.includes('application/json')) {
              data = await response.clone().json()
            }
          } catch (e) {}
          if (data.error !== 'Forbidden') {
            store.dispatch({
              type: SHOW_ERROR_MODAL,
              payload: {
                message: data.message || 'Bạn không có quyền thực hiện thao tác này.',
                errorCode: null,
              },
            })
            store.dispatch({
              type: LOGOUT_ACTION,
            })
            history.push('/login')
          }
          throw new Error(`SSE open failed: ${response.status}`)
        }
        if (userOnOpen) {
          await userOnOpen(response)
        }
        if (!response.ok) {
          throw new Error(`SSE open failed: ${response.status}`)
        }
      },
    })
  },
}

export default HttpClient
