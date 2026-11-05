import { unregister } from './serviceWorker'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createDebounce from 'redux-debounced'
import thunk from 'redux-thunk'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { setUpHttpClient, setUpEventSourceClient } from './utility/HttpClient'
import rootReducer from './redux/reducers/rootReducer'
import AppRouter from './routes/AppRouter'
import LoadingSpinner from './components/Loading-spinner'
import './components/RippleButton'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { setBaseHistory } from './history'
import firebase from "firebase";
import {FIRE_BASE_CONFIGS} from "./configs/app-configs";

const App = ({ children, appId, appReducer, message, apiBaseUrl, history }) => {
  const middlewares = [thunk, createDebounce()]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer(appReducer),
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  )
  const persistor = persistStore(store)
  setBaseHistory(history)
  setUpHttpClient(store, apiBaseUrl)
  setUpEventSourceClient(store, apiBaseUrl)
  firebase.initializeApp(FIRE_BASE_CONFIGS)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadingSpinner />
        <AppRouter message={message} appId={appId} history={history} children={children} />
      </PersistGate>
    </Provider>
  )
}
unregister()

export default App
