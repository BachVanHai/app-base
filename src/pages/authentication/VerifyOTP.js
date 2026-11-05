import React, {useEffect, useState} from 'react'
import {Button} from 'reactstrap'
import OtpInput from "react-otp-input";
import {FormattedMessage, useIntl} from "react-intl";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {register, verifyPhoneNumber} from "../../redux/actions/auth";
import {useHistory} from "react-router-dom";
import {toastError} from "../../utility";
import {Form} from "formik";


const VerifyOtp = () => {

  const [otp, setOtp] = useState('')
  const registerInfo = useSelector(state => state.auth.register)
  const dispatch = useDispatch()
  const history = useHistory()
  const intl = useIntl()
  const NUM_INPUTS = 6;

  useEffect(() => {
      // if (!window.recaptchaVerifier) {
      //   history.push('/register')
      // }
  }, [])

  const onChangeOtp = (value) => {
    setOtp(value)
  }

  const onClickVerify = () => {
    dispatch(verifyPhoneNumber({...registerInfo.user, code: otp}))
  }

  const onClickGetOtp = () => {
    window.recaptchaVerifier.verify().then((value => {
     if (value === registerInfo.user.recaptchaToken) {
       toastError("Mã Otp đã được gửi đến điện thoại của bạn!")
     }
    }))
  }

  return (
    <React.Fragment>
      <div className='text-center'>
        <h1 className='landing-page-title'>
          <FormattedMessage id='verifyAccount.phoneNumberVerification'/>
        </h1>
        <p className='mt-2 text-dark-green-2' dangerouslySetInnerHTML={{
          __html: intl.formatMessage(
            {id: 'verifyAccount.otp.info'},
            {phoneNumber: registerInfo.user.phoneNumber})
        }}/>
        <div className='w-100 d-flex justify-content-center my-2'>
          <OtpInput
            inputStyle="otp-input"
            value={otp}
            onChange={onChangeOtp}
            isInputNum
            shouldAutoFocus
            numInputs={NUM_INPUTS}
            separator={<span className='ml-2'/>}
          />
        </div>
        <div className='mt-4'>
          <Button className='w-100' color={'primary'} onClick={onClickVerify} disabled={otp.length !== NUM_INPUTS}>
            <FormattedMessage id='verifyAccount.otp.verify'/>
          </Button>
        </div>
        <div className='mt-3'>
          <span>
            <FormattedMessage id='verifyAccount.didNotReceiveCode' />
          </span>
          <span className='text-secondary font-weight-bold cursor-pointer' onClick={onClickGetOtp} style={{marginLeft : '3px'}}>
            <FormattedMessage id='verifyAccount.tryAgain' />
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}


export default VerifyOtp
