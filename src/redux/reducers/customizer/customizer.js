import themeConfig from '../../../configs/themeConfig'

const customizerReducer = (state = { ...themeConfig }, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.theme }
    case 'SET_APP_ID':
      return { ...state, appId: action.appId }
    case 'COLLAPSE_SIDEBAR':
      return { ...state, sidebarCollapsed: action.value }
    case 'CHANGE_NAVBAR_COLOR':
      return { ...state, navbarColor: action.color }
    case 'CHANGE_NAVBAR_TYPE':
      return { ...state, navbarType: action.style }
    case 'CHANGE_FOOTER_TYPE':
      return { ...state, footerType: action.style }
    case 'CHANGE_MENU_COLOR':
      return { ...state, menuTheme: action.style }
    case 'HIDE_SCROLL_TO_TOP':
      return { ...state, hideScrollToTop: action.value }
    default:
      return state
  }
}

export default customizerReducer
