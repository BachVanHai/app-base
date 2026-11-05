import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectWithSocialNetwork, getUserSocial } from '../../../redux/actions/auth'
import GoogleLogin from 'react-google-login'
import { FormattedMessage } from 'react-intl'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FB_APP_ID, GOOGLE_APP_ID, LOGIN_METHODS } from '../../../configs/app-configs'
import { Button, Card, CardBody } from 'reactstrap'
import React from 'react'

const ConnectWithSocial = () => {
  const dispatch = useDispatch()
  const { id } = useSelector((state) => state.auth.user)
  const { userFacebookAuth, userGoogleAuth } = useSelector((state) => state.auth)
  useEffect(() => {
    if (id) {
      dispatch(getUserSocial(id)).then()
    }
  }, [id])
  const connectWithGoogle = (data) => {
    const { profileObj } = data
    if (data.accessToken) {
      dispatch(
        connectWithSocialNetwork(
          {
            socialId: profileObj.googleId,
            email: profileObj.email,
            picture: profileObj.imageUrl,
            name: profileObj.name,
            provider: LOGIN_METHODS.GOOGLE,
          },
          id
        )
      )
    }
  }
  const connectWithFacebook = (data) => {
    if (data.accessToken) {
      dispatch(
        connectWithSocialNetwork(
          {
            socialId: data.id,
            email: data.email,
            name: data.name,
            picture: data.picture.data.url,
            provider: LOGIN_METHODS.FACEBOOK,
          },
          id
        )
      )
    }
  }
  return (
    <Card className='connect-with-social p-1'>
      <CardBody>
        <h4 className='text-uppercase mb-2'>
          <FormattedMessage id='connectWithSocial.connectAccount' />
        </h4>
        <div className='d-flex align-items-center mb-1'>
          {userFacebookAuth !== null && userFacebookAuth !== void 0 && userFacebookAuth.picture ? (
            <img
              src={userFacebookAuth.picture}
              className='width-50 height-50 mr-2 rounded-circle border'
              alt=''
            />
          ) : (
            <img
              className='mr-2'
              alt='facebook'
              src='https://sit2.bmktech.vn/resources/images/fb-icon.svg'
            />
          )}
          <div className='mr-2 width-100 font-weight-bold'>
            {(userFacebookAuth === null || userFacebookAuth === void 0
              ? void 0
              : userFacebookAuth.name) || 'Facebook'}
          </div>
          <FacebookLogin
            type='button'
            appId={FB_APP_ID}
            cssClass='fb-login-button'
            disableMobileRedirect={true}
            render={({ onClick }) => (
              <div onClick={onClick} className='cursor-pointer'>
                <Button color='primary'>
                  <FormattedMessage id='connectWithSocial.connect' />
                </Button>
              </div>
            )}
            fields='name,email,picture'
            callback={connectWithFacebook}
          />
        </div>
        <div className='d-flex align-items-center'>
          {userGoogleAuth !== null && userGoogleAuth !== void 0 && userGoogleAuth.picture ? (
            <img
              className='width-50 height-50 mr-2 rounded-circle border'
              src={userGoogleAuth.picture}
              alt=''
            />
          ) : (
            <img
              className='mr-2'
              alt='google'
              src='https://sit2.bmktech.vn/resources/images/google-icon.svg'
            />
          )}
          <div className='mr-2 width-100 font-weight-bold'>
            {(userGoogleAuth === null || userGoogleAuth === void 0
              ? void 0
              : userGoogleAuth.name) || 'Google'}
          </div>
          <GoogleLogin
            clientId={GOOGLE_APP_ID}
            onSuccess={connectWithGoogle}
            render={({ onClick }) => (
              <div onClick={onClick} className='cursor-pointer'>
                <Button color='primary'>
                  <FormattedMessage id='connectWithSocial.connect' />
                </Button>
              </div>
            )}
            cookiePolicy='single_host_origin'
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default ConnectWithSocial
