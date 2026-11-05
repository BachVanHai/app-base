import {
  API_CHANGE_PASSWORD,
  API_COMPLETE_INFO,
  API_CREATE_PASSWORD,
  API_EMAIL_SUGGESTION,
  API_FORGOT_PASSWORD,
  API_GET_FILE,
  API_GET_USER,
  API_GET_USER_BY_REGISTER_TOKEN, API_GUEST_SOCIAL_LOGIN,
  API_LOGIN_URL,
  API_LOGOUT_URL,
  API_REGISTER,
  API_RESET_PASSWORD,
  API_UPDATE_USER_INFO,
  API_UPLOAD_FILE,
  API_USER_SETTINGS, API_VERIFY_ACCOUNT, API_VERIFY_PHONENUMBER, API_GET_USER_SOCIAL, API_PARTNER_SOCIAL_LOGIN } from '../configs/app-configs'
import HttpClient from '../utility/HttpClient'

export class AuthService {
  static login = (user) => {
    return HttpClient.post(API_LOGIN_URL, user)
  }
  static guestSocialLogin = (data) => {
    return HttpClient.post(API_GUEST_SOCIAL_LOGIN, data)
  }
  static partnerSocialLogin = (data) => {
    return HttpClient.post(API_PARTNER_SOCIAL_LOGIN, data)
  }
  static getUserInfo = (username, authToken) => {
    const headers = {
      Authorization: `Bearer ${authToken}`,
    }
    return HttpClient.get(`${API_GET_USER}/${username}`, {
      headers,
    })
  }
  static getUserByRegisterToken = (registerToken) => {
    return HttpClient.get(`${API_GET_USER_BY_REGISTER_TOKEN}/${registerToken}`)
  }
  static compeleteInfo = (user) => {
    return HttpClient.post(`${API_COMPLETE_INFO}`, user)
  }
  static logout = (userId) => {
    return HttpClient.post(`${API_LOGOUT_URL}/${userId}`)
  }
  static createPassword = (password, registerToken) => {
    return HttpClient.post(API_CREATE_PASSWORD, {
      password,
      registerToken,
    })
  }
  static register = (user) => {
    return HttpClient.post(API_REGISTER, user)
  }
  static checkLoginByToken = () => {
    return HttpClient.get(API_LOGIN_URL)
  }
  static getSuggestionEmail = (username) => {
    return HttpClient.get(`${API_EMAIL_SUGGESTION}/${username}`)
  }
  static forgotPassword = (username, email) => {
    return HttpClient.post(API_FORGOT_PASSWORD, {
      username,
      email,
    })
  }
  static resetPassword = (password, resetToken) => {
    return HttpClient.post(API_RESET_PASSWORD, {
      password,
      resetToken,
    })
  }
  static updateUserInfo = (user) => {
    return HttpClient.put(API_UPDATE_USER_INFO, user)
  }
  static changePassword = (value) => {
    return HttpClient.post(API_CHANGE_PASSWORD, value)
  }
  static changeUserSetting = (value) => {
    return HttpClient.put(API_USER_SETTINGS, value)
  }
  static verifyAccount = (token) => {
    return HttpClient.post(`${API_VERIFY_ACCOUNT}/${token}`)
  }
  static verifyPhoneNumber = (value) => {
    return HttpClient.post(`${API_VERIFY_PHONENUMBER}`, value)
  }
  static getUserSocial = (userId) => {
    return HttpClient.get(`${API_GET_USER_SOCIAL}/${userId}`)
  }
  static connectWithSocialNetwork = (data, userId) => {
    return HttpClient.post(`${API_GET_USER_SOCIAL}/${userId}`, data)
  }
  static updateAvatar = async (user, file) => {
    const formData = new FormData()
    formData.append(
      'fileInfo',
      new Blob(
        [
          JSON.stringify({
            userId: user.id,
            docType: 'AVATAR',
          }),
        ],
        {
          type: 'application/json',
        }
      )
    )
    formData.append('file', file)
    const res = await HttpClient.post(API_UPLOAD_FILE, formData)
    if (res.status === 200) {
      return HttpClient.defaults.baseURL + API_GET_FILE + '?fileCode=' + res.data.code
    }
    return ''
  }
}
