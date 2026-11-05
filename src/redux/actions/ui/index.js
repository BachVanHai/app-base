import { CLEAR_MUST_CHANGE_PASSWORD } from '../auth'

export const SHOW_LOADING_BAR = 'SHOW_LOADING_BAR'

export const HIDE_LOADING_BAR = 'HIDE_LOADING_BAR'

export const SHOW_CONFIRM_ALERT = 'SHOW_CONFIRM_ALERT'

export const HIDE_CONFIRM_ALERT = 'HIDE_CONFIRM_ALERT'

export const SHOW_ERROR_MODAL = 'SHOW_ERROR_MODAL'

export const HIDE_ERROR_MODAL = 'HIDE_ERROR_MODAL'

export const showConfirmAlert = (configs) => {
  return (dispatch) =>
    dispatch({
      type: SHOW_CONFIRM_ALERT,
      payload: configs,
    })
}

export const hideConfirmAlert = () => {
  return (dispatch) =>
    dispatch({
      type: HIDE_CONFIRM_ALERT,
    })
}

export const clearMustChangePassword = () => ({
  type: CLEAR_MUST_CHANGE_PASSWORD,
})
