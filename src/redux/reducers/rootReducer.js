import { combineReducers } from 'redux'
import customizer from './customizer/customizer'
import auth from './auth/'
import navbar from './navbar/'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import uiReducer from './ui'

const rootReducer = (appReducer) =>
  combineReducers({
    customizer,
    ui : uiReducer,
    auth: persistReducer(
      {
        storage,
        key: 'root',
        blacklist : ['loginStatus']
      },
      auth
    ),
    navbar,
    app: appReducer
  })

export default rootReducer
