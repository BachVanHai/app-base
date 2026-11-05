import { LOAD_NATIVGATION, LOAD_USER_ROLE } from '../../actions/navbar/Index'

const initialState = {
  navConfigs: [],
  roles: [],
  userRoles: []
}

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NATIVGATION:
      return {
        ...state,
        navConfigs: action.payload.navConfigs,
        roles: action.payload.roles
      }
    case LOAD_USER_ROLE:
      return {
        ...state,
        userRoles: action.payload
      }
    default:
      return state
  }
}

export default navbarReducer
