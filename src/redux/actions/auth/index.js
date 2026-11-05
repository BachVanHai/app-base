import {FormattedMessage} from 'react-intl'
import {
  API_R_200,
  getContextPath,
  REMEMBER_ME_TOKEN, USER_ROLE, LOGIN_METHODS,
} from '../../../configs/app-configs'
import {history} from '../../../history'
import {AuthService} from '../../../services/authService'
import React from 'react'
import {toastError, toastSuccess, trimObjectValues} from '../../../utility'
import AppId from '../../../configs/appId'
import {goBackHomePage} from "../navbar";

export const LOGIN_ACTION = 'LOGIN_ACTION'
export const LOGIN_FAIL_ACTION = 'LOGIN_FAIL_ACTION'
export const LOGOUT_ACTION = 'LOGOUT_ACTION'
export const SAVE_REGISTER_TOKEN = 'SAVE_REGISTER_TOKEN'
export const SAVE_RESET_PASSWORD_TOKEN = 'SAVE_RESET_PASSWORD_TOKEN'
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
export const CHANGE_SESSION_EXPIRE_TIME = 'CHANGE_SESSION_EXPIRE_TIME'
export const CHANGE_VERIFY_ACCOUNT_STATUS = 'CHANGE_VERIFY_ACCOUNT_STATUS'
export const CHANGE_IS_GUEST = 'CHANGE_IS_GUEST'
export const GOTO_GUEST_APP = 'GOTO_GUEST_APP'
export const GOTO_AGENCY_APP = 'GOTO_AGENCY_APP'

var sessionTimeout = null

export const checkLoginStatus = (authToken, redirectUrl) => {
  return async (dispatch, getState) => {
    try {
      let response = await AuthService.checkLoginByToken()
      const {appId} = getState().customizer
      const {username} = appId === AppId.ELITE_APP ? getState().auth.guest.user : getState().auth.user
      if (response.status === API_R_200 && username) {
        response = await AuthService.getUserInfo(
          username,
          authToken
        )

        const payload = appId === AppId.ELITE_APP ? {guest: {authToken, user: response.data || {}}} : {
          authToken,
          user: response.data || {}
        }

        dispatch({
          type: LOGIN_ACTION,
          payload
        })
        dispatch(goBackHomePage())
      } else {
        dispatch({type: LOGOUT_ACTION})
      }
    } catch (error) {
      dispatch({type: LOGOUT_ACTION})
    }
  }
}

export const loginAction = (user) => {
  return async (dispatch, getState) => {
    user.rememberMe = user.isRemeberMe
    let response = await AuthService.login(user)
    const {isGuest} = getState().auth
    if (response.status === API_R_200) {
      const authToken = response.data.id_token
      response = await AuthService.getUserInfo(user.username, authToken)
      if (user.isRemeberMe) {
        localStorage.setItem(
          REMEMBER_ME_TOKEN,
          JSON.stringify({
            username: user.username,
            name: response.data.fullName
          })
        )
      }
      const {userSettings, groupId} = response.data
      if (userSettings) {
        localStorage.setItem('language', userSettings.language.toLowerCase())
      }
      if (isGuest) {
        dispatch({
          type: LOGIN_ACTION,
          payload: {
            guest: {
              authToken,
              loginMethod: LOGIN_METHODS.PASSWORD,
              type: 'PASSWORD',
              user: response.data || {}
            }
          }
        })
      } else {
        if (groupId === USER_ROLE.KHCN) {
          toastError('Bạn phải đăng ký để trở thành đại lý !')
          return;
        }
        dispatch({
          type: LOGIN_ACTION,
          payload: {authToken, type: 'PASSWORD', user: response.data || []}
        })
      }
      redirectMainApp(isGuest)
    } else {
      dispatch({type: LOGOUT_ACTION})
    }
  }
}

export const socialLogin = (data, loginMethod, openAddInfoPopup) => {
  return async (dispatch, getState) => {
    let res = await AuthService.guestSocialLogin(data)
    if (!res || !res.data) {
      return;
    }
    if (res.data.data && !res.data.idToken) {
      openAddInfoPopup(res.data.data)
      return;
    }
    const authToken = res.data.idToken
    res = await AuthService.getUserInfo(res.data.username, authToken)
    dispatch({
      type: LOGIN_ACTION,
      payload: {guest: {authToken, loginMethod, type: 'PASSWORD', user: res.data || {}}}
    })
    dispatch(goBackHomePage())
  }
}

export const changeIsGuest = (isGuest) => {
  return (dispatch) => {
    dispatch({type: CHANGE_IS_GUEST, payload: isGuest})
  }
}

export const goToGuestApp = () => {
  return (dispatch) => {
    dispatch({type: GOTO_GUEST_APP})
    redirectMainApp(true)
  }
}

export const goToAgencyApp = () => {
  return (dispatch) => {
    dispatch({type: GOTO_AGENCY_APP})
    redirectMainApp(false)
  }
}


export const createPassword = (password) => {
  return async (dispatch, getState) => {
    try {
      const response = await AuthService.createPassword(
        password,
        getState().auth.register.token
      )
      if (response.status === 200 && response.data) {
        history.push('/complete-information')
      }
    } catch (error) {
    }
  }
}

export const register = (values, isGuest) => {
  return async () => {
    try {
      const res = await AuthService.register(trimObjectValues(values))
      if (res.status === 200 && res.data) {
        if (!isGuest) {
          toastSuccess(<FormattedMessage id='register.registerSuccess'/>)
          history.push('/login')
        }
      }
    } catch (error) {
    }
  }
}

export const compeleteInfo = (user) => {
  return async (dispatch, getState) => {
    try {
      user.registerToken = getState().auth.register.token
      const response = await AuthService.compeleteInfo(user)
      if (response.status === 200 && response.data) {
        toastSuccess(<FormattedMessage id='completeInformation.success'/>)
        history.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const saveRegisterToken = (registerToken) => {
  return async (dispatch) => {
    const response = await AuthService.getUserByRegisterToken(registerToken)
    if (response.status === 200 && response.data) {
      dispatch({
        type: SAVE_REGISTER_TOKEN,
        payload: {token: registerToken, user: response.data}
      })
    } else {
      history.push('/login')
    }
  }
}

export const saveRegisterInfo = (values) => {
  return async (dispatch) => {
    dispatch({
      type: SAVE_REGISTER_TOKEN,
      payload: {token: '', user: values}
    })
  }
}

export const saveResetPasswordToken = (token) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_RESET_PASSWORD_TOKEN,
      payload: token
    })
  }
}

export const forgotPassword = ({username, email}) => {
  return async (dispatch, getState) => {
    try {
      const response = await AuthService.forgotPassword(username, email)
      if (response.status === 200 && response.data) {
        toastSuccess(<FormattedMessage id='forgotPassword.successfull'/>)
        dispatch({
          type: SAVE_RESET_PASSWORD_TOKEN,
          payload: ''
        })
        history.push('/login')
      }
    } catch (error) {
    }
  }
}

export const resetPassword = (password) => {
  return async (dispatch, getState) => {
    try {
      const response = await AuthService.resetPassword(
        password,
        getState().auth.resetPasswordToken
      )
      if (response.status === 200 && response.data) {
        toastSuccess(<FormattedMessage id='createPassword.resetSuccessFul'/>)
        dispatch({
          type: SAVE_RESET_PASSWORD_TOKEN,
          payload: ''
        })
        history.push('/login')
      }
    } catch (error) {
    }
  }
}

export const logoutAction = () => {
  return async (dispatch, getState) => {
    clearTimeout(sessionTimeout)
    const {id} = getState().auth.user
    await AuthService.logout(id)
    dispatch({type: LOGOUT_ACTION})
  }
}

export const updateUserInfo = (user, avatarImage) => {
  return async (dispatch) => {
    if (avatarImage) {
      const url = await AuthService.updateAvatar(user, avatarImage)
      user.userSettings.avatar = url || user.userSettings.avatar
    }
    const res = await AuthService.updateUserInfo(user)
    if (res.status === 200) {
      dispatch({type: UPDATE_USER_INFO, payload: res.data})
      toastSuccess(<FormattedMessage id='setting.updateInfo.success'/>)
      dispatch(goBackHomePage())
    }
  }
}

export const changePassword = ({oldPassword, newPassword}) => {
  return async (dispatch) => {
    const res = await AuthService.changePassword({oldPassword, newPassword})
    if (res.status === 200) {
      toastSuccess(<FormattedMessage id='changePassword.success'/>)
      dispatch(goBackHomePage())
    }
  }
}

export const changeLanguageSetting = (lang, callBack) => {
  return async (dispatch, getState) => {
    const {appId} = getState().customizer
    const {userSettings = {}} = appId === AppId.ELITE_APP ? getState().auth.guest.user : getState().auth.user
    const value = {...userSettings, language: lang.toUpperCase()}
    const res = await AuthService.changeUserSetting(value)
    if (res.status === 200) {
      callBack()
      toastSuccess(<FormattedMessage id='generalInfo.changeLanguage.success'/>)
      dispatch(goBackHomePage())
    }
  }
}

export const changeActionExpireTime = () => {
  return (dispatch) => {
    // clearTimeout(sessionTimeout)
    // sessionTimeout = setTimeout(() => {
    //   toastError(<FormattedMessage id='common.sessionExpired'/>)
    //   dispatch(logoutAction())
    // }, SESSION_TIMEOUT * 60 * 1000)
    dispatch({type: CHANGE_SESSION_EXPIRE_TIME})
  }
}

export const verifyAccount = () => {
  return async (dispatch) => {
    const res = await AuthService.verifyAccount(token)
    if (res.status === 200) {
      dispatch({type: CHANGE_VERIFY_ACCOUNT_STATUS, payload: {token, status: 'SUCCESS'}})
    } else {
      dispatch({type: CHANGE_VERIFY_ACCOUNT_STATUS, payload: {token, status: 'FAIL'}})
    }
  }
}

export const verifyPhoneNumber = (values) => {
  return async (dispatch) => {
    const res = await AuthService.verifyPhoneNumber(values)
    if (res.status === 200) {
      toastSuccess(<FormattedMessage id='verifyAccount.otp.registerSuccess'/>)
      history.push('/login')
    }
  }
}


const redirectMainApp = (isGuest) => {
  if (isGuest) {
    history.push('/')
  } else {
    history.push('/app/home')
  }
}


