import { API_GET_NAV_CONFIGS, API_GET_USER_ROLES } from '../configs/app-configs'
import { generateUUID } from '../utility'
import HttpClient from '../utility/HttpClient'

export class NavBarService {
  static getNativagtion = () => {
    return HttpClient.get(API_GET_NAV_CONFIGS, {
      params: { uuid: generateUUID() },
      isBackgroundRequest: true
    })
  }

  static getUserGroupRole = (groupId) => {
    return HttpClient.get(`${API_GET_USER_ROLES}/${groupId}`, {
      params: { uuid: generateUUID() },
      isBackgroundRequest: true
    })
  }
}
