import React, {useState} from 'react'
import {FormattedMessage} from 'react-intl'
import {
  FormGroup,
  Label,
  Button,
  Input,
  Modal,
  ModalBody,
} from 'reactstrap'
import '../../assets/scss/pages/authentication.scss'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {Sun} from 'react-feather'
import {AuthService} from '../../services/authService'
import {useDispatch} from 'react-redux'
import {forgotPassword} from '../../redux/actions/auth'
import {PHONE_REGEX} from '../../configs/app-configs'
import BaseFormGroup from '../../components/BaseFormGroup'
import {Link} from "react-router-dom";

const formSchema = Yup.object().shape({
  username: Yup.string()
    .matches(PHONE_REGEX, () => <FormattedMessage id='login.username.invalid'/>)
    .required(
      <FormattedMessage id='forgotPassword.username.required'/>
    ),
  email: Yup.string()
    .required(<FormattedMessage id='forgotPassword.email.required'/>)
    .email(<FormattedMessage id='register.email.invalid'/>)
})
const ForgotPassword = () => {
  const [isModalOpen, setIsOpenModal] = useState(false)
  const [emailSuggestion, setEmailSuggestion] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (values, actions) => {
    dispatch(forgotPassword(values))
  }

  const onClickSuggestion = async (username) => {
    const res = await AuthService.getSuggestionEmail(username)
    if (res.status === 200) {
      setEmailSuggestion(res.data)
      toggleModal()
    }
  }

  const toggleModal = () => {
    setIsOpenModal(!isModalOpen)
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: '',
          email: ''
        }}
        onSubmit={onSubmit}
        validationSchema={formSchema}
      >
        {({errors, touched, values}) => (
          <Form>
            <h1 className='landing-page-title'>
              <FormattedMessage id='forgotPassword'/>
            </h1>
            <BaseFormGroup
              messageId='forgotPassword.username'
              fieldName='username'
              errors={errors}
              touched={touched}
            />
            <FormGroup className='form-label-group position-relative'>
              <FormattedMessage id='forgotPassword.email'>
                {(msg) => (
                  <React.Fragment>
                    <Field name='email'>
                      {({field, form}) => (
                        <Input
                          className={`${errors.email &&
                          touched.email &&
                          'is-invalid not-show-icon'
                          }`}
                          placeholder={msg}
                          {...field}
                          onChange={(e) =>
                            form.setFieldValue('email', e.target.value ? e.target.value.trim() : '')
                          }
                        />
                      )}
                    </Field>
                    {errors.email && touched.email ? (
                      <div className='text-danger'>{errors.email}</div>
                    ) : null}
                    {values.username ? (
                      <div
                        className='form-control-position text-primary cursor-pointer'
                        onClick={() => onClickSuggestion(values.username)}
                      >
                        <Sun size={15}/>
                      </div>
                    ) : (
                      ''
                    )}
                    <Label>{msg}</Label>
                  </React.Fragment>
                )}
              </FormattedMessage>
            </FormGroup>
            <div className='d-flex justify-content-center'>
              <div className='col-md-4'>
                <Link to={'/'}>
                  <Button className='btn-second'>
                    <FormattedMessage id='common.back'/>
                  </Button>
                </Link>
              </div>
              <div className='col-md-4'>
                <Button color='primary' type='submit'>
                  <FormattedMessage id='forgotPassword.verify'/>
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Modal
        isOpen={isModalOpen}
        toggle={toggleModal}
        className='modal-dialog-centered'
      >
        <ModalBody className='modal-dialog-centered'>
          <div className="w-100">
            <div>
              {!emailSuggestion ? (
                <FormattedMessage id='forgotPassword.notFoundEmailSuggestion'/>
              ) : (
                <React.Fragment>
                  <FormattedMessage id='forgotPassword.yourEmailIs'/>:{' '}
                  <b>{emailSuggestion}</b>
                </React.Fragment>
              )}
            </div>
            <br/>
            <div className="d-flex justify-content-end">
              <Button.Ripple color='primary' onClick={toggleModal}>
                OK
              </Button.Ripple>{' '}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default ForgotPassword
