import { HIDE_ERROR_MODAL, SHOW_ERROR_MODAL } from '../../actions/ui'
import { HIDE_CONFIRM_ALERT, SHOW_CONFIRM_ALERT , SHOW_LOADING_BAR , HIDE_LOADING_BAR } from '../../actions/ui/index'

const DEFAULT_CONFIRM_ALERT = {
  title: '',
  isShow: false,
  content: '',
  onConfirm: () => {},
  onCancel: () => {},
}

export const DEFAULT_ERROR_MODAL = {
  isOpen: false,
  message: '',
  errorCode: null,
}

const initialState = {
  loading: new Set(),
  isLoading: false,
  confirmAlert: {
    ...DEFAULT_CONFIRM_ALERT,
  },
  errorModal: {
    ...DEFAULT_ERROR_MODAL,
  },
}

const uiReducer = (state = initialState, action) => {
  let loadingSet = new Set(state.loading.values())
  switch (action.type) {
    case SHOW_LOADING_BAR:
      loadingSet.add(action.payload)
      return {
        ...state,
        isLoading: !!loadingSet.size,
        loading: loadingSet,
      }
    case HIDE_LOADING_BAR:
      if (action.payload === 'ALL') {
        loadingSet = new Set()
      } else {
        loadingSet.delete(action.payload)
      }
      return {
        ...state,
        isLoading: !!loadingSet.size,
        loading: loadingSet,
      }
    case SHOW_CONFIRM_ALERT:
      return {
        ...state,
        confirmAlert: {
          isShow: true,
          ...state.confirmAlert,
          ...action.payload,
        },
      }
    case HIDE_CONFIRM_ALERT:
      return {
        ...state,
        confirmAlert: {
          ...DEFAULT_CONFIRM_ALERT,
        },
      }
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          isOpen: true,
          message: action.payload.message,
          errorCode: action.payload.errorCode || null,
        },
      }
    case HIDE_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          ...DEFAULT_ERROR_MODAL,
        },
      }
    default:
      return state
  }
}

export default uiReducer
