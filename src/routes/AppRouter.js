import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import Layout from '../layouts/Layout'
import {checkLoginStatus, loginAction, changeIsGuest, logoutAction} from '../redux/actions/auth/index'
import {setAppId} from '../redux/actions/customizer/index'
import {loadNavtigation, loadUserRoles} from '../redux/actions/navbar/'
import {IntlProviderWrapper} from '../utility/context/Internationalization'
import messages_en from '../assets/data/locales/en.json'
import messages_vi from '../assets/data/locales/vi.json'
import AccountSettings from '../pages/account-settings/AccountSettings'
import GeneralInfo from '../pages/general-info/GeneralInfo'
import LandingPage from '../pages/authentication/LandingPage'
import {LOGIN_STATUS} from '../configs/app-configs'
import {ToastContainer} from 'react-toastify'
import ConfirmAlert from '../components/ConfirmAlert'
import AppId from '../configs/appId'
import {SocialLogin} from "../pages/authentication/SocialLogin";
import CheckLocationChange from "../components/CheckLocationChange";


const AppRouter = (props) => {
  const {
    checkLoginStatus,
    appId,
    user,
    loginStatus,
    isAuthentication,
    guest,
    authToken,
    children,
    loadNavtigation,
    changeIsGuest,
    loadUserRoles,
    history,
    message
  } = props

  useEffect(() => {
    const urlParams = new URLSearchParams(document.location.search)
    const code = urlParams.get('code') || (appId === AppId.ELITE_APP ? guest.authToken : authToken)
    const redirectUrl = urlParams.get('redirectUrl')
    if (code && loginStatus !== LOGIN_STATUS.SUCCESS) {
      checkLoginStatus(code, redirectUrl)
    }
    if (authToken) {
      loadNavtigation(appId)
      loadUserRoles()
    }
  }, [authToken])


  const appMessage = {
    en: {...messages_en, ...message.en},
    vi: {...messages_vi, ...message.vi}
  }

  const settingRoutes = [
    {path: 'account-info', component: AccountSettings},
    {path: 'change-password', component: AccountSettings},
    {path: 'share-with-friends', component: AccountSettings},
    {path: 'terms-and-condition', component: GeneralInfo},
    {path: 'privacy-policy', component: GeneralInfo},
    {path: 'language', component: GeneralInfo},
    {path: 'contact', component: GeneralInfo}
  ]

  const landingPageRoutes = [
    {path: 'login'},
    {path: 'register'},
    {path: 'forgot-password'},
    {path: 'provide-new-password'},
    {path: 'reset-password'},
    {path: 'verify-account'},
    {path: 'verify-otp'},
    {path: 'create-password'},
    {path: 'complete-information'}
  ]

  return (
    <IntlProviderWrapper
      locale={
        user && user.userSettings
          ? user.userSettings.language.toLowerCase()
          : localStorage.getItem('language')
      }
      appMessage={appMessage}
    >
      <Router history={history}>
        <Switch>
          <Route
            path='/'
            render={(props) =>
              isAuthentication && appId !== AppId.ELITE_APP ? (
                <Layout {...{...props, appId}}>
                  <Switch>
                    {settingRoutes.map((item) => (
                      <Route
                        key={item.path}
                        path={`/app/${item.path}`}
                        render={() => <item.component activeTab={item.path}/>}
                      />
                    ))}
                    <Route path='/' render={() => children}/>
                  </Switch>
                </Layout>
              ) : (
                <Switch>
                  {landingPageRoutes.map((item) => (
                    <Route
                      key={item.path}
                      path={`/${item.path}`}
                      render={() => <LandingPage activeTab={item.path}/>}
                    />
                  ))}
                  <Route path='/' render={() => children}/>
                  <Redirect from='/' to='/'/>
                </Switch>
              )
            }
          />
        </Switch>
        <CheckLocationChange/>
      </Router>
      <ToastContainer
        hideProgressBar
        position='top-right'
        autoClose={5000}
        closeOnClick
        pauseOnHover
      />
      <ConfirmAlert/>
    </IntlProviderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthentication: !!state.auth.authToken,
    authToken: state.auth.authToken,
    guest: state.auth.guest,
    loginStatus: state.auth.loginStatus,
    user: state.auth.user,
    appId: state.customizer.appId
  }
}
export default connect(mapStateToProps, {
  checkLoginStatus,
  loadNavtigation,
  loadUserRoles,
  loginAction,
  changeIsGuest,
  logoutAction,
  setAppId
})(AppRouter)
