import { HIDE_CONFIRM_ALERT, SHOW_CONFIRM_ALERT , SHOW_LOADING_BAR , HIDE_LOADING_BAR } from '../../actions/ui/Index'

const DEFAULT_CONFIRM_ALERT = {
  title: '',
  isShow: false,
  content: '',
  onConfirm: () => {},
  onCancel: () => {}
}

const initialState = {
  loading: new Set(),
  isLoading : false,
  confirmAlert: {
    ...DEFAULT_CONFIRM_ALERT
  }
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING_BAR:
      return { ...state, isLoading: true, loading : state.loading.add(action.payload) }
    case HIDE_LOADING_BAR:
      state.loading.delete(action.payload)
      return { ...state, isLoading: !!state.loading.size }
    case SHOW_CONFIRM_ALERT:
      return { ...state, confirmAlert: { isShow: true, ...state.confirmAlert, ...action.payload } }
    case HIDE_CONFIRM_ALERT:
      return { ...state, confirmAlert: { ...DEFAULT_CONFIRM_ALERT } }
    default:
      return state
  }
}

export default uiReducer
