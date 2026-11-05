import React from 'react'
import Axios from 'axios'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'
import { generateUUID, toastError } from '.'
import {API_BASE_URL, API_TIME_OUT} from '../configs/app-configs'
import {changeActionExpireTime, LOGOUT_ACTION} from '../redux/actions/auth'
import { HIDE_LOADING_BAR, SHOW_LOADING_BAR } from '../redux/actions/ui'
import { FormattedMessage } from 'react-intl'
import moment from "moment";
import {AppId} from "../index";
import {history} from "../history";

const HttpClient = Axios.create({
  timeout: API_TIME_OUT,
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(Axios.defaults.adapter, { threshold: 15 * 60 * 1000 })
  ),
  invalidate: async (config, request) => {
    if (request.clearCacheEntry) {
      await config.store.removeItem(config.uuid)
    }
  }
})

HttpClient.defaults.headers['Content-Type'] = 'application/json'



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
    navigator.geolocation.getCurrentPosition(position => {
      localStorage.setItem('latitude', position.coords.latitude)
      localStorage.setItem('longitude', position.coords.longitude)
    });
  }

  HttpClient.defaults.baseURL = apiBaseUrl || API_BASE_URL

  HttpClient.interceptors.request.use((config) => {
    const token = store.getState().auth.guest.authToken || store.getState().auth.authToken
    const sessionExpireTime = store.getState().auth.sessionExpireTime
    language = localStorage.getItem('language')
    if (token) {
      store.dispatch(changeActionExpireTime());
      config.headers.Authorization = `Bearer ${token}`
      const isSessionExpired = moment().isAfter(moment(sessionExpireTime));
      if (sessionExpireTime && isSessionExpired) {
        toastError(<FormattedMessage id='common.sessionExpired' />)
        store.dispatch({type : LOGOUT_ACTION})
        return;
      }
    }
    config.headers.appId = store.getState().customizer.appId
    config.headers.appVersion = 'v1'
    config.headers.latitude = localStorage.getItem('latitude')
    config.headers.longitude = localStorage.getItem('longitude')
    config.headers.deviceId = deviceId
    config.headers['Accept-Language'] = language
    if (!config.isBackgroundRequest) {
      store.dispatch({ type: SHOW_LOADING_BAR, payload : '' })
    }
    return config
  })

  HttpClient.interceptors.response.use(
    (response) => {
      store.dispatch({ type: HIDE_LOADING_BAR , payload : ''})
      return response
    },
    (e) => {
      store.dispatch({ type: HIDE_LOADING_BAR , payload : ''})
      if (!e.response) {
        return e
      }
      switch (e.response.status) {
        case 400:
          toastError(e.response.data.message)
          break;
        case 403:
          if (e.response.data.error === 'Forbidden') {
            return e.response;
          }
          toastError(e.response.data.message)
          store.dispatch({ type: 'LOGOUT_ACTION' })
          history.push('/login')
          break;
        case 500:
          toastError(<FormattedMessage id='common.error.500' />);
      }
      return e.response
    }
  )
}



export default HttpClient
