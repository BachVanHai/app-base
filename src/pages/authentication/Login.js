import { MustChangePasswordForm } from '../account-settings/tabs/ChangePassword'
import { object, string } from 'yup'
import React, {useEffect, useState} from 'react'
import {Check} from 'react-feather'
import {FormattedMessage} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FormGroup, Label, Button, Input} from 'reactstrap'
import CheckBox from '../../components/Checkbox'
import {loginAction} from '../../redux/actions/auth/index'
import {Formik, Form, FastField} from 'formik'
import { PASSWORD_REGEX, REMEMBER_ME_TOKEN } from '../../configs/app-configs'
import BaseFormGroup from '../../components/BaseFormGroup.js'
import {trimValue} from '../../utility'
import {SocialLogin} from "./SocialLogin";
import AppSelection from "./AppSelection";

const formSchema = object().shape({
  username: string().required(<FormattedMessage id='login.username.required' />),
  password: string()
    .required(<FormattedMessage id='login.password.required' />)
    .matches(PASSWORD_REGEX, () => <FormattedMessage id='createPassword.password.invalid' />),
})

const Login = () => {
  const [rememberMe, setRememberMe] = useState(null)
  const [isRemeberMe, setIsRemeberMe] = useState(false)
  const dispatch = useDispatch()
  const { isGuest, mustChangePassword } = useSelector((state) => state.auth)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(REMEMBER_ME_TOKEN))
    if (user) {
      setRememberMe(user)
    }
  }, [])
  if (mustChangePassword) {
    return <MustChangePasswordForm />
  }
  const onSubmit = (values, actions) => {
    dispatch(
      loginAction({
        username: trimValue(values.username),
        password: values.password,
        isGuest,
        isRemeberMe,
      })
    )
    actions.setSubmitting(false)
  }
  const onClickNotMe = () => {
    localStorage.removeItem(REMEMBER_ME_TOKEN)
    setRememberMe(null)
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        username: rememberMe ? rememberMe.username : '',
        password: '',
      }}
      onSubmit={onSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <AppSelection isLogin={true} />
          {rememberMe ? (
            <h4 className='text-center mb-2'>
              <FormattedMessage
                id='login.sayHi'
                values={{
                  name: rememberMe.name,
                }}
              />
            </h4>
          ) : (
            <BaseFormGroup
              messageId='login.username'
              fieldName='username'
              errors={errors}
              touched={touched}
            />
          )}
          <FormGroup className='form-label-group position-relative'>
            <FormattedMessage id='login.password'>
              {(msg) => (
                <React.Fragment>
                  <FastField name='password'>
                    {({ field, form }) => (
                      <Input
                        type='password'
                        className={`form-control ${
                          errors.password && touched.password && 'is-invalid'
                        }`}
                        placeholder={msg}
                        {...field}
                        onChange={(e) => form.setFieldValue('password', e.target.value)}
                      />
                    )}
                  </FastField>
                  {errors.password && touched.password ? (
                    <div className='text-danger'>{errors.password}</div>
                  ) : null}
                  <Label>{msg}</Label>
                </React.Fragment>
              )}
            </FormattedMessage>
          </FormGroup>
          <FormGroup className='d-flex justify-content-between align-items-center'>
            {rememberMe ? (
              <a className='text-dark-green' onClick={onClickNotMe}>
                <FormattedMessage id='login.notMe' />
              </a>
            ) : (
              <CheckBox
                color='primary'
                icon={<Check className='vx-icon' size={16} />}
                label={<FormattedMessage id='login.rememberMe' />}
                onChange={(e) => setIsRemeberMe(e.target.checked)}
                defaultChecked={isRemeberMe}
              />
            )}
            <div
              className='divider'
              style={{
                height: '30px',
              }}
            />
            <div className='float-right'>
              <Link to='/forgot-password' className='text-secondary font-weight-bold'>
                <FormattedMessage id='forgotPassword' />
              </Link>
            </div>
          </FormGroup>
          <div className='d-flex justify-content-center'>
            <Button color='primary' type='submit'>
              <FormattedMessage id='login' />
            </Button>
          </div>
          <div className='mt-2'>
            <SocialLogin isLogin={true} isRemeberMe={isRemeberMe} />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Login
