import getNativgationConfig from '../../../configs/navigationConfig'
import { NavBarService } from '../../../services/navbarService'
import {history} from '../../../history'

export const LOAD_NATIVGATION = 'LOAD_NATIVGATION'

export const LOAD_USER_ROLE = 'LOAD_USER_ROLE'

export const loadNavigation = () => {
  return async (dispatch) => {
    try {
      const res = await NavBarService.getNativagtion()
      if (!res || !res.data) {
        return
      }
      dispatch(loadUserRoles())
      const roles = res.data || []
      const navConfigs = getNativgationConfig(roles)
      dispatch({
        type: LOAD_NATIVGATION,
        payload: {
          navConfigs,
          roles,
        },
      })
    } catch (e) {}
  }
}

export const loadUserRoles = () => {
  return async (dispatch, getState) => {
    const { groupId } = getState().auth.user
    if (!groupId) {
      return
    }
    const res = await NavBarService.getUserGroupRole(groupId)
    if (res.status === 200) {
      dispatch({
        type: LOAD_USER_ROLE,
        payload: res.data,
      })
    }
  }
}

export const goBackHomePage = () => {
  return async (dispatch, getState) => {
    var _getState, _getState$auth
    const { authToken } =
      ((_getState = getState()) === null || _getState === void 0
        ? void 0
        : (_getState$auth = _getState.auth) === null || _getState$auth === void 0
        ? void 0
        : _getState$auth.guest) || {}
    if (authToken) {
      history.push('/home')
    } else {
      history.push('/app/home')
    }
  }
}
