import HttpClient from '../utility/HttpClient'
import { generateUUID } from '../utility'
import { API_CHECK_NEW_NOTIFICATIONS, API_GET_NOTIFICATION_FROM_ESPUBLIC, API_UPDATE_ALL_NOTIFICATION_STATUS, API_UPDATE_NOTIFICATION } from '../configs/app-configs'

export class NotificationService {
  static getMyNotifications = () => {
    return HttpClient.get(API_GET_NOTIFICATION_FROM_ESPUBLIC, {
      params: {
        uuid: generateUUID(),
      },
      isBackgroundRequest: true,
    })
  }
  static checkNewNotification = () => {
    return HttpClient.get(API_CHECK_NEW_NOTIFICATIONS, {
      params: {
        uuid: generateUUID(),
      },
      isBackgroundRequest: true,
    })
  }
  static updateNotification = (notification) => {
    return HttpClient.put(API_UPDATE_NOTIFICATION, notification, {
      isBackgroundRequest: true,
    })
  }
  static updateAllNotificationStatus = (notifications) => {
    return HttpClient.put(API_UPDATE_ALL_NOTIFICATION_STATUS, notifications, {
      params: {
        isBackgroundRequest: true,
      },
    })
  }
}
