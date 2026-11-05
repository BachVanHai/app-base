import React, {useState} from 'react'
import {FB_APP_ID, GOOGLE_APP_ID, IMAGE, LOGIN_METHODS, PHONE_REGEX} from "../../configs/app-configs";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {useDispatch} from "react-redux";
import {socialLogin} from "../../redux/actions/auth";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {FormattedMessage} from "react-intl";
import BaseFormGroup from "../../components/BaseFormGroup";
import GoogleLogin from 'react-google-login';

export const SocialLogin = ({isLogin}) => {

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const dispatch = useDispatch()

  const openAddInfoModal = (userInfo) => {
    toggleModal()
    setUserInfo(userInfo)
  }

  const handleFBLogin = (data) => {
    if (data.accessToken) {
      dispatch(socialLogin({
        socialId: data.id,
        email: data.email,
        picture: data.picture.data.url,
        name: data.name,
        provider: LOGIN_METHODS.FACEBOOK
      }, LOGIN_METHODS.FACEBOOK, openAddInfoModal))
    }
  }

  const handleGoogleLogin = (data) => {
    const {profileObj} = data
    dispatch(socialLogin({
      socialId: profileObj.googleId,
      email: profileObj.email,
      picture: profileObj.imageUrl,
      name: profileObj.name,
      provider: LOGIN_METHODS.GOOGLE
    }, LOGIN_METHODS.GOOGLE, openAddInfoModal))
  }


  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState)
  }

  const onSubmit = async (values, validateForm) => {
    const errors = await validateForm()
    if (Object.keys(errors).length) {
      return
    }
    dispatch(socialLogin({
      ...userInfo,
      email: values.email,
      phoneNumber: values.phoneNumber,
    }, LOGIN_METHODS.FACEBOOK, openAddInfoModal))
  }

  const onClickCancel = () => {
    toggleModal()
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(<FormattedMessage id='register.email.required'/>)
      .email(<FormattedMessage id='register.email.invalid'/>),
    phoneNumber: Yup.string()
      .matches(PHONE_REGEX, () => (
        <FormattedMessage id='register.phoneNumber.invalid'/>
      ))
      .required(<FormattedMessage id='register.phoneNumber.required'/>),
  })

  return (
    <div className='social-login'>
      <div className='social-login-btn'>
        <FormattedMessage id={isLogin ? 'socialLogin.loginWith' : 'socialLogin.registerWith'}/>
        <div className='d-flex justify-content-center mt-2'>
          <FacebookLogin type='button' appId={FB_APP_ID} cssClass='fb-login-button'
                         disableMobileRedirect
                         render={({onClick}) => (
                           <div onClick={onClick} className='cursor-pointer'>
                             <img alt='facebook' src={IMAGE.FB_LOGO}/>
                           </div>
                         )}
                         fields="name,email,picture" callback={handleFBLogin}/>
          <div className='ml-2'>
            <GoogleLogin
              clientId={GOOGLE_APP_ID}
              onSuccess={handleGoogleLogin}
              render={({onClick}) => (
                <div onClick={onClick} className='cursor-pointer'>
                  <img alt='google' src={IMAGE.GOOGLE_LOGO}/>
                </div>
              )}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          email: userInfo.email || '',
          phoneNumber: userInfo.phoneNumber || '',
        }}
        enableReinitialize
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {
          ({errors, touched, validateForm, values}) => (
            <Form>
              <Modal isOpen={isOpenModal} className='modal-dialog-centered'>
                <ModalHeader toggle={toggleModal}>
                  <FormattedMessage id='socialLogin.addInfo'/>
                </ModalHeader>
                <ModalBody>
                  <div className='mb-2'>
                    <i>
                      <small><FormattedMessage id='socialLogin.addInfo.info'/></small>
                    </i>
                  </div>
                  <BaseFormGroup
                    fieldName='email'
                    disabled={userInfo.email}
                    errors={errors}
                    touched={touched}
                    messageId='register.email'
                  />
                  <BaseFormGroup
                    fieldName='phoneNumber'
                    disabled={userInfo.phoneNumber}
                    errors={errors}
                    touched={touched}
                    messageId='register.phoneNumber'
                  />
                </ModalBody>
                <ModalFooter>
                  <Button.Ripple type='button' color='secondary' onClick={onClickCancel}>
                    <FormattedMessage id='common.cancel'/>
                  </Button.Ripple>
                  <Button.Ripple color='primary' onClick={() => onSubmit(values, validateForm)}>
                    <FormattedMessage id='common.ok'/>
                  </Button.Ripple>
                </ModalFooter>
              </Modal>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
