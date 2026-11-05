import React, {useEffect, useState} from 'react'
import {FormattedMessage} from 'react-intl'
import classnames from 'classnames'
import {IMAGE} from '../../configs/app-configs'
import Login from './Login'
import {Link, useHistory} from 'react-router-dom'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import CreatePassword from './CreatePassword'
import VerifyOtp from "./VerifyOTP";
import {Col, Row} from "reactstrap";
import LandingPageHeader from "./LandingPageHeader";
import styled from 'styled-components'
import CompleteInformation from "./CompleteInformation";

const PageStyle = styled.div`

  .landing-page-bg {
    background-image: url('${IMAGE.LANDING_PAGE_BG}');
    background-size: cover;
    background-position: center;
  }
`


const LandingPage = (props) => {
  const [activeTab, setActiveTab] = useState('')
  const history = useHistory()

  useEffect(() => {
    setActiveTab(props.activeTab || 'login')
  }, [props.activeTab])

  const TabView = () => {
    switch (activeTab) {
      case 'login':
        return <Login/>
      case 'register':
        return <Register/>
      case 'forgot-password':
        return <ForgotPassword/>
      case 'reset-password':
      case 'provide-new-password':
        return <CreatePassword/>
      case 'create-password':
        return <CreatePassword isCreatePassword={true}/>
      case 'verify-otp':
        return <VerifyOtp/>
      case 'complete-information':
        return <CompleteInformation/>
      default:
        return ''
    }
  }

  const goToLink = (link) => history.push(link)

  return (
    <PageStyle>
      <div className='landing-page'>
        <Row className='w-100 m-0' style={{height: '100vh'}}>
          <Col lg={5} className='d-none d-lg-block landing-page-bg'>
            <div className='logo mx-auto'>
              <Link to={'/'}>
                <img
                  src={IMAGE.LOGO}
                  alt='logo'
                />
              </Link>
            </div>
            <div className='info-text'>
              <h3 className='text-white'>
                <FormattedMessage id='landingPage.welcomeText'/>
              </h3>
              <p className='text-white mt-2'>
                <FormattedMessage id='landingPage.slogan'/>
              </p>
              <small className='d-flex align-items-center justify-content-center'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.1611 9.32831L11.3406 10.4239L10.7463 10.9441C10.0018 11.5954 9.05084 11.9543 8.06866 11.9543C5.86182 11.9543 4.06641 10.1959 4.06641 8.03464C4.06641 5.87835 5.86182 4.12402 8.06866 4.12402C9.05164 4.12402 9.99942 4.47951 10.7372 5.12504L11.3098 5.62613L10.1794 6.75711L9.67753 6.3137C9.24575 5.93239 8.67448 5.72235 8.06866 5.72235C6.74313 5.72235 5.66473 6.75966 5.66473 8.03457C5.66473 9.31457 6.74313 10.3559 8.06866 10.3559C8.66779 10.3559 9.23913 10.1426 9.67753 9.7553L10.1611 9.32831Z"
                    fill="#E7EBEB"/>
                  <circle cx="8" cy="8" r="6.5" stroke="#E7EBEB"/>
                </svg>
                <span style={{marginLeft: '2px'}}>
                   <FormattedMessage id='landingPage.copyRight'/>
               </span>
              </small>
            </div>
          </Col>
          <Col className='mx-auto' sm={12} lg={7}>
            <div className={activeTab === 'complete-information' ? 'main-content wider' : 'main-content'}>
              <LandingPageHeader/>
              {
                activeTab === 'login' || activeTab === 'register' ? (
                  <div className='lg-content-header d-flex cursor-pointer mt-3'>
                    <div
                      onClick={() => goToLink('/login')}
                      className={classnames('col-6 text-center tab-control', {
                        active: activeTab === 'login'
                      })}
                    >
                      <FormattedMessage id='login'/>
                    </div>
                    <div
                      onClick={() => goToLink('/register')}
                      className={classnames('col-6 text-center tab-control', {
                        active: activeTab === 'register'
                      })}
                    >
                      <FormattedMessage id='register'/>
                    </div>
                  </div>
                ) : null
              }
              <div className={activeTab === 'login' || activeTab === 'register' ? '' : 'lg-content'}>
                <div className='w-100'>
                  <TabView/>
                </div>
              </div>
              <div id='recaptcha-container'/>
            </div>
          </Col>
        </Row>
      </div>
    </PageStyle>
  )
}

export default LandingPage
