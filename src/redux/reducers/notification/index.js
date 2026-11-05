import { LOAD_MY_NOTIFICATIONS, MERGE_SSE_NOTIFICATION, RECEIVE_NEW_NOTIFICATIONS, UPDATE_ALL_NOTIFICATIONS, UPDATE_NOTIFICATION } from '../../actions/notification'

export const initialState = {
  notifications: [],
  newNotifications: [],
}

const notificationReducer = (
  state = {
    ...initialState,
  },
  action
) => {
  const notifications = [...state.notifications]
  let newNotifications
  switch (action.type) {
    case LOAD_MY_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      }
    case RECEIVE_NEW_NOTIFICATIONS:
      return {
        ...state,
        newNotifications: action.payload,
      }
    case MERGE_SSE_NOTIFICATION: {
      const incoming = action.payload
      if (!incoming) {
        return state
      }
      const matchIndex = notifications.findIndex(
        (item) =>
          (incoming.id != null && item.id === incoming.id) ||
          (incoming.notificationTemplateHisId != null &&
            item.notificationTemplateHisId === incoming.notificationTemplateHisId)
      )
      if (matchIndex >= 0) {
        newNotifications = notifications.map((item, index) =>
          index === matchIndex
            ? {
                ...item,
                ...incoming,
              }
            : item
        )
      } else if (incoming.deleted !== true) {
        newNotifications = [incoming, ...notifications]
      } else {
        newNotifications = notifications
      }
      return {
        ...state,
        notifications: newNotifications,
      }
    }
    case UPDATE_NOTIFICATION:
      newNotifications = notifications.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              deleted: action.payload.deleted,
              read: action.payload.read,
            }
          : item
      )
      return {
        ...state,
        notifications: newNotifications,
      }
    case UPDATE_ALL_NOTIFICATIONS:
      if (action.payload === 'DELETE') {
        newNotifications = notifications.map((item) => ({
          ...item,
          deleted: true,
          read: true,
        }))
      } else {
        newNotifications = notifications.map((item) => ({
          ...item,
          deleted: false,
          read: action.payload,
        }))
      }
      return {
        ...state,
        notifications: newNotifications,
      }
    default:
      return state
  }
}
export default notificationReducer
