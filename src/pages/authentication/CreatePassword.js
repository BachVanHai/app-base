import { object, ref, string } from 'yup'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'reactstrap'
import { Formik, Form } from 'formik'
import BaseFormGroup from '../../components/BaseFormGroup.js'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  createPassword,
  resetPassword,
  saveRegisterToken,
  saveResetPasswordToken
} from '../../redux/actions/auth'
import { PASSWORD_REGEX } from '../../configs/app-configs'

const formSchema = object().shape({
  password: string()
    .required(<FormattedMessage id='createPassword.password.required' />)
    .matches(PASSWORD_REGEX, () => <FormattedMessage id='createPassword.password.invalid' />),
  passwordConfirmation: string()
    .oneOf([ref('password'), null], <FormattedMessage id='createPassword.passwordMustMatch' />)
    .required(<FormattedMessage id='createPassword.password.required' />),
})

const CreatePassword = ({ isCreatePassword: _isCreatePassword = false }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    _isCreatePassword ? setRegisterToken() : setResetPassword()
  }, [])
  const onClickContinue = (values) => {
    if (_isCreatePassword) {
      dispatch(createPassword(values.password))
    } else {
      dispatch(resetPassword(values.password))
    }
  }
  const setRegisterToken = () => {
    const code = new URLSearchParams(document.location.search).get('registerToken')
    if (code) {
      dispatch(saveRegisterToken(code))
      history.replace(history.location.pathname)
    }
  }
  const setResetPassword = () => {
    const code = new URLSearchParams(document.location.search).get('resetToken')
    if (code) {
      dispatch(saveResetPasswordToken(code))
      history.replace(history.location.pathname)
    }
  }
  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      onSubmit={onClickContinue}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='text-center mb-3'>
            <h1 className='landing-page-title'>
              <FormattedMessage id='createPassword.title' />
            </h1>
          </div>
          <BaseFormGroup
            type='password'
            messageId='login.password'
            fieldName='password'
            errors={errors}
            touched={touched}
          />
          <BaseFormGroup
            type='password'
            messageId='createPassword.enterThePassword'
            fieldName='passwordConfirmation'
            errors={errors}
            touched={touched}
          />
          <div>
            <FormattedMessage id='createPassword.condition.1' />
          </div>
          <div>
            <FormattedMessage id='createPassword.condition.2' />
          </div>
          <div>
            <FormattedMessage id='createPassword.condition.3' />
          </div>
          <div className='d-flex justify-content-center mt-2'>
            <Button color='primary' type='submit'>
              <FormattedMessage
                id={_isCreatePassword ? 'createPassword.continutes' : 'createPassword.done'}
              />
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CreatePassword
