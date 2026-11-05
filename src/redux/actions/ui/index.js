export const SHOW_LOADING_BAR = 'SHOW_LOADING_BAR'
export const HIDE_LOADING_BAR = 'HIDE_LOADING_BAR'
export const SHOW_CONFIRM_ALERT = 'SHOW_CONFIRM_ALERT'
export const HIDE_CONFIRM_ALERT = 'HIDE_CONFIRM_ALERT'

export const showLoadingBar = (value) => {
  return (dispatch) => dispatch({ type: SHOW_LOADING_BAR, value })
}

export const hideLoadingBar = (value) => {
  return (dispatch) => dispatch({ type: HIDE_LOADING_BAR, value })
}

export const showConfirmAlert = (configs) => {
  return (dispatch) => dispatch({ type: SHOW_CONFIRM_ALERT, payload: configs })
}

export const hideConfirmAlert = () => {
  return (dispatch) => dispatch({ type: HIDE_CONFIRM_ALERT })
}
