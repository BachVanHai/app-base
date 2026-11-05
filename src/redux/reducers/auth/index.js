import {DATE_TIME_FORMAT, LOGIN_METHODS, LOGIN_STATUS, SESSION_TIMEOUT} from '../../../configs/app-configs'
import {
  CHANGE_IS_GUEST,
  CHANGE_SESSION_EXPIRE_TIME, CHANGE_VERIFY_ACCOUNT_STATUS, GOTO_AGENCY_APP, GOTO_GUEST_APP,
  LOGIN_ACTION,
  LOGIN_FAIL_ACTION,
  LOGOUT_ACTION,
  SAVE_REGISTER_TOKEN,
  SAVE_RESET_PASSWORD_TOKEN,
  UPDATE_USER_INFO,
} from '../../actions/auth'
import moment from "moment";

const authInitialState = {
  authToken: '',
  isGuest: false,
  loginMethod: LOGIN_METHODS.PASSWORD,
  user: '',
  loginStatus: '',
  verifyAccount: {
    token: '',
    status: ''
  },
  register: {user: {}, token: ''},
  guest: {},
  resetPasswordToken: '',
  sessionExpireTime: null,
}


export const authReducers = (state = {...authInitialState}, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      return {...state, ...action.payload, loginStatus: LOGIN_STATUS.SUCCESS}
    }
    case LOGOUT_ACTION: {
      return {...authInitialState}
    }
    case LOGIN_FAIL_ACTION: {
      return {...state, loginStatus: LOGIN_STATUS.FAIL}
    }
    case SAVE_REGISTER_TOKEN: {
      return {...state, register: action.payload}
    }
    case SAVE_RESET_PASSWORD_TOKEN: {
      return {...state, resetPasswordToken: action.payload}
    }
    case UPDATE_USER_INFO: {
      if (!state.guest.user) {
        return {...state, user: action.payload}
      } else {
        return {...state, guest: {...state.guest, user: action.payload}}
      }
    }
    case CHANGE_SESSION_EXPIRE_TIME : {
      return {...state, sessionExpireTime: moment().add(SESSION_TIMEOUT, 'minutes').format(DATE_TIME_FORMAT)}
    }
    case CHANGE_IS_GUEST : {
      return {...state, isGuest: action.payload}
    }
    case CHANGE_VERIFY_ACCOUNT_STATUS : {
      return {...state, verifyAccount: {...state.verifyAccount, ...action.payload}}
    }
    case GOTO_AGENCY_APP : {
      return {...state, user: state.guest.user, authToken: state.guest.authToken}
    }
    case GOTO_GUEST_APP : {
      return {...state, guest: {user: state.user, authToken: state.authToken}, user: '', authToken: ''}
    }
    default:
      return state
  }
}

export default authReducers
