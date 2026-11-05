import { object, string } from 'yup'
import React, {useEffect, useState} from 'react'
import {Check} from 'react-feather'
import { FormattedMessage } from 'react-intl'
import {FormGroup, Button} from 'reactstrap'
import CheckBox from '../../components/Checkbox'
import {Formik, Form} from 'formik'
import BaseFormGroup from '../../components/BaseFormGroup.js'
import {NAME_REGEX, PHONE_REGEX} from '../../configs/app-configs'
import { register } from '../../redux/actions/auth'
import {useDispatch, useSelector} from 'react-redux'
import AppSelection from "./AppSelection";
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import {SocialLogin} from "./SocialLogin";

const formSchema = object().shape({
  fullName: string()
    .required(<FormattedMessage id='register.fullname.required' />)
    .matches(NAME_REGEX, () => <FormattedMessage id='register.fullname.invalid' />),
  email: string()
    .required(<FormattedMessage id='register.email.required' />)
    .email(<FormattedMessage id='register.email.invalid' />),
  phoneNumber: string()
    .matches(PHONE_REGEX, () => <FormattedMessage id='register.phoneNumber.invalid' />)
    .required(<FormattedMessage id='register.phoneNumber.required' />),
  refCode: string()
    .length(10, () => <FormattedMessage id='register.refCode.invalid' />)
    .matches(PHONE_REGEX, () => <FormattedMessage id='register.refCode.invalid' />),
})

const Register = () => {
  var _guest$user, _guest$user2, _guest$user3
  const [isAppcepted, setIsAppcepted] = useState(false)
  const [isNotApccepted, setIsNotAccepted] = useState(false)
  const { isGuest, register: registerInfo, guest } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (recaptchaToken) => {
        dispatch(
          register({
            ...registerInfo.user,
            recaptchaToken,
          })
        )
      },
    })
  }, [])
  const onSubmit = async (values) => {
    if (!isAppcepted) {
      setIsNotAccepted(true)
      return
    }
    const data = {
      ...values,
      isGuest,
    }
    dispatch(register(data))
  }
  const ontoggleAccepted = (checked) => {
    setIsAppcepted(checked)
    setIsNotAccepted(!checked)
  }
  const onChangeFullName = (e, form) => {
    const value = e.target.value.replace(
      /[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi,
      ''
    )
    form.setFieldValue('fullName', value)
  }
  return (
    <Formik
      initialValues={{
        fullName: isGuest
          ? ''
          : guest === null || guest === void 0
          ? void 0
          : (_guest$user = guest.user) === null || _guest$user === void 0
          ? void 0
          : _guest$user.fullName,
        email: isGuest
          ? ''
          : guest === null || guest === void 0
          ? void 0
          : (_guest$user2 = guest.user) === null || _guest$user2 === void 0
          ? void 0
          : _guest$user2.email,
        phoneNumber: isGuest
          ? ''
          : guest === null || guest === void 0
          ? void 0
          : (_guest$user3 = guest.user) === null || _guest$user3 === void 0
          ? void 0
          : _guest$user3.phoneNumber,
        refCode: '',
      }}
      onSubmit={onSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <AppSelection />
          <BaseFormGroup
            fieldName='fullName'
            errors={errors}
            touched={touched}
            onChange={onChangeFullName}
            messageId='register.fullname'
          />
          <BaseFormGroup
            fieldName='email'
            errors={errors}
            touched={touched}
            messageId='register.email'
          />
          <BaseFormGroup
            fieldName='phoneNumber'
            errors={errors}
            touched={touched}
            messageId='register.phoneNumber'
          />
          <BaseFormGroup
            fieldName='refCode'
            errors={errors}
            touched={touched}
            messageId='register.refCode'
          />
          <FormGroup>
            <div className='d-flex align-items-center'>
              <CheckBox
                color='primary'
                icon={<Check className='vx-icon' size={16} />}
                onChange={(e) => ontoggleAccepted(e.target.checked)}
                defaultChecked={isAppcepted}
              />
              <div>
                <FormattedMessage id='register.agreeWith' />{' '}
                <a className='text-primary'>
                  <FormattedMessage id='register.policyAndCondition' />
                </a>{' '}
                <FormattedMessage id='register.useService' />
              </div>
            </div>
            {isNotApccepted ? (
              <div className='text-danger'>
                <FormattedMessage id='register.mustAppcepted' />
              </div>
            ) : null}
            <div className='d-flex justify-content-center mt-2'>
              <Button color='primary' type='submit'>
                <FormattedMessage id='register' />
              </Button>
            </div>
          </FormGroup>
          {isGuest ? (
            <div className='mt-2'>
              <SocialLogin />
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  )
}

export default Register
