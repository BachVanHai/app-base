import { NotificationService } from '../../../services/notificationService'

export const LOAD_MY_NOTIFICATIONS = 'LOAD_MY_NOTIFICATIONS'

export const RECEIVE_NEW_NOTIFICATIONS = 'RECEIVE_NEW_NOTIFICATIONS'

export const MERGE_SSE_NOTIFICATION = 'MERGE_SSE_NOTIFICATION'

export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION'

export const UPDATE_ALL_NOTIFICATIONS = 'UPDATE_ALL_NOTIFICATIONS'

export const getMyNotifications = () => {
  return async (dispatch) => {
    const res = await NotificationService.getMyNotifications()
    if (!res || res.status !== 200) {
      return
    }
    dispatch({
      type: LOAD_MY_NOTIFICATIONS,
      payload: res.data,
    })
  }
}

export const checkReceiveNewNotification = () => {
  return async () => {
    const res = await NotificationService.checkNewNotification()
    if (!res || res.status !== 200) {
      return
    }
    return res.data
  }
}

export const updateNotification = (notification) => {
  return async (dispatch) => {
    const res = await NotificationService.updateNotification(notification)
    if (!res || res.status !== 200) return
    dispatch({
      type: UPDATE_NOTIFICATION,
      payload: notification,
    })
  }
}

export const updateAllNotifications = (newNotificationsRequest, status) => {
  return async (dispatch) => {
    const res = await NotificationService.updateAllNotificationStatus(newNotificationsRequest)
    if (!res || res.status !== 200) return
    dispatch({
      type: UPDATE_ALL_NOTIFICATIONS,
      payload: status,
    })
  }
}

export const mergeSseNotification = (notification) => ({
  type: MERGE_SSE_NOTIFICATION,
  payload: notification,
})
