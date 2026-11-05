import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Col, Row } from 'reactstrap'
import '../../../assets/scss/pages/authentication.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import BaseFormGroup from '../../../components/BaseFormGroup.js'
import { useDispatch } from 'react-redux'
import { PASSWORD_REGEX } from '../../../configs/app-configs'
import { goBackHomePage } from '../../../redux/actions/navbar/Index'
import { changePassword } from '../../../redux/actions/auth'
import { showConfirmAlert } from '../../../redux/actions/ui/Index'

const formSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required(<FormattedMessage id='changePassword.oldPassword.required' />)
    .matches(PASSWORD_REGEX, () => (
      <FormattedMessage id='changePassword.oldPassword.invalid' />
    )),
  newPassword: Yup.string()
    .required(<FormattedMessage id='changePassword.newPassword.required' />)
    .matches(PASSWORD_REGEX, () => (
      <FormattedMessage id='changePassword.newPassword.invalid' />
    )),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref('newPassword'), null],
      <FormattedMessage id='createPassword.passwordMustMatch' />
    )
    .required(<FormattedMessage id='changePassword.confirmPassword.required' />)
})

const ChangePassword = () => {
  const dispatch = useDispatch()

  const onClickSubmit = (values) => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='setting.changePassword' />,
        isShow: true,
        content: <FormattedMessage id='changePassword.confirmMessage' />,
        onConfirm: () => {
          dispatch(changePassword(values))
        }
      })
    )
  }

  const onClickBackHome = () => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='common.home' />,
        isShow: true,
        content: <FormattedMessage id='common.backHome.confirmMessage' />,
        onConfirm: () => {
          dispatch(goBackHomePage())
        }
      })
    )
  }

  return (
    <Formik
      initialValues={{
        oldPassword: '',
        newPassword: '',
        passwordConfirmation: ''
      }}
      onSubmit={onClickSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form className='mt-3'>
          <BaseFormGroup
            type='password'
            messageId='changePassword.oldPassword'
            fieldName='oldPassword'
            errors={errors}
            touched={touched}
          />
          <BaseFormGroup
            type='password'
            messageId='changePassword.newPassword'
            fieldName='newPassword'
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
          <Row>
            <Col className='d-flex justify-content-end  mt-2' sm='12'>
              <Button.Ripple
                type='button'
                color='secondary'
                onClick={onClickBackHome}
              >
                <FormattedMessage id={`common.home`} />
              </Button.Ripple>
              <Button color='primary' className='ml-2' type='submit'>
                <FormattedMessage id='common.saveChanges' />
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword
