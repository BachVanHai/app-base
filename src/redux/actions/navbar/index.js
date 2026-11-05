import { getExternalAppUrl } from '../../../configs/app-configs'
import AppId from '../../../configs/appId'
import getNativgationConfig from '../../../configs/navigationConfig'
import { NavBarService } from '../../../services/navbarService'
import {history} from '../../../history'

export const LOAD_NATIVGATION = 'LOAD_NATIVGATION'
export const LOAD_USER_ROLE = 'LOAD_USER_ROLE'
export const BACK_HOME = 'BACK_HOME'

export const loadNavtigation = (appId) => {
  return async (dispatch) => {
    const res = await NavBarService.getNativagtion()
    const roles = res.data || []
    const navConfigs = getNativgationConfig(appId, roles)
    dispatch({
      type: LOAD_NATIVGATION,
      payload: { navConfigs, roles }
    })
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
        payload: res.data
      })
    }
  }
}

export const goBackHomePage = () => {
  return async (dispatch, getState) => {
    const { authToken } = getState()?.auth?.guest || {}
    if (authToken) {
      history.push('/home')
    } else {
      history.push('/app/home')
    }
  }
}
