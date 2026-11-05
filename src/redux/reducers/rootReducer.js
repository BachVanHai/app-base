import { authReducers } from './auth'
import notificationReducer from './notification'
import navbarReducer from './navbar'
import customizerReducer from './customizer/customizer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import uiReducer from './ui'

const rootReducer = (appReducer) =>
  combineReducers({
    customizer: customizerReducer,
    ui: uiReducer,
    auth: persistReducer(
      {
        storage,
        key: 'root',
        blacklist: ['loginStatus'],
      },
      authReducers
    ),
    navbar: navbarReducer,
    notifications: notificationReducer,
    app: appReducer,
  })

export default rootReducer
