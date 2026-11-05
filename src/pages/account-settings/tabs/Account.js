import { object, string } from 'yup'
import React, {useEffect, useState} from 'react'
import {Media, Row, Col, Button, Input} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {Formik, Form} from 'formik'
import BaseFormGroup from '../../../components/BaseFormGroup'
import BaseFormDatePicker from '../../../components/BaseFormDatePicker'
import { GENDER_OPTIONS, VN_COUNTRY_CODE, USER_TYPE, NAME_REGEX, IC_TYPES_OPTIONS, MAX_FILE_SIZE } from '../../../configs/app-configs'
import BaseFormGroupSelect from '../../../components/BaseFormGroupSelect'
import {
  useBankList,
  useCityList,
  useDistrictList,
  useWardList
} from '../../../customHooks/dataCollection'
import {updateUserInfo} from '../../../redux/actions/auth'
import {bytesToMb, toastError, trimObjectValues} from '../../../utility'
import {showConfirmAlert} from '../../../redux/actions/ui'
import {goBackHomePage} from '../../../redux/actions/navbar'
import AppId from "../../../configs/appId";
import moment from "moment";

const validationSchema = object().shape({
  fullName: string()
    .required(<FormattedMessage id='register.fullname.required' />)
    .matches(NAME_REGEX, () => <FormattedMessage id='register.fullname.invalid' />),
  email: string()
    .required(<FormattedMessage id='register.email.required' />)
    .email(<FormattedMessage id='register.email.invalid' />),
})

const UserAccountTab = () => {
  const { appId } = useSelector((state) => state.customizer)
  let {
    userDetails = {},
    userSettings = {},
    ...user
  } = useSelector((state) => (appId !== AppId.ELITE_APP ? state.auth.user : state.auth.guest.user))
  const dispatch = useDispatch()
  const { cities } = useCityList(VN_COUNTRY_CODE)
  const { districts, loadDitrictsByCity } = useDistrictList(null)
  const { wards, loadWardsByDistrict } = useWardList(null)
  const { banks } = useBankList()
  const [avatar, setAvatar] = useState({
    url: userSettings.avatar,
    file: null,
  })
  useEffect(() => {
    if (userDetails && userDetails.city) {
      loadDitrictsByCity(userDetails.city)
      loadWardsByDistrict(userDetails.district)
    }
  }, [])
  const onChangeAvatar = (e) => {
    const validTypeExtension = ['jpg', 'jpeg', 'bmp', 'gif', 'png', 'HEIF', 'HEVC', 'heic']
    const file = e.target.files[0]
    if (!file) {
      return
    }
    const fileType = file.type.split('/').pop().toLowerCase()
    if (validTypeExtension.indexOf(fileType) < 0) {
      toastError(<FormattedMessage id='setting.updateInfo.imageTypeInvalid' />)
      return
    }
    if (bytesToMb(file.size) >= MAX_FILE_SIZE) {
      toastError(
        <FormattedMessage
          id='setting.updateInfo.imageExceedSize'
          values={{
            size: MAX_FILE_SIZE,
          }}
        />
      )
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setAvatar({
        url: reader.result,
        file,
      })
    }
  }
  const onSubmit = async (values) => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='setting.accountInformation' />,
        isShow: true,
        content: <FormattedMessage id='setting.updateInfo.confirmMessage' />,
        onConfirm: () => {
          dispatch(updateUserInfo(trimObjectValues(values), avatar.file))
        },
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
        },
      })
    )
  }
  const onChangeCity = async (id, setFieldValue) => {
    loadDitrictsByCity(id)
    setFieldValue('userDetails.district', '')
  }
  const onChangeDistrict = async (id, setFieldValue) => {
    loadWardsByDistrict(id)
    setFieldValue('userDetails.ward', '')
  }
  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mr-2 my-25'>
            <Media
              className='users-avatar-shadow rounded'
              object={true}
              src={avatar.url}
              alt='user profile image'
              height='84'
              width='84'
            />
          </Media>
          <Media className='mt-2' body={true}>
            <Media
              className='font-medium-1 text-bold-600'
              style={{
                textTransform: 'uppercase',
              }}
              tag='p'
              heading={true}
            >
              {user.fullName}
            </Media>
            <div>
              <FormattedMessage id='setting.accountCode' />
              {' : '}
              {user.userCode}
            </div>
            <div className='d-flex flex-wrap'>
              <Button.Ripple tag='label' className='mr-1 mt-2' color='primary' outline={true}>
                <Input
                  type='file'
                  name='file'
                  id='uploadImg'
                  onChange={onChangeAvatar}
                  hidden={true}
                  accept='image/*'
                />
                <FormattedMessage id='setting.change' />
              </Button.Ripple>
            </div>
          </Media>
        </Media>
      </Col>
      <Col sm='12'>
        <Formik
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={{
            ...user,
            dateOfBirth: user.dateOfBirth || moment().subtract(15, 'years').toISOString(),
            userDetails,
            userSettings,
          }}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form>
              <Row className='mt-2'>
                <Col sm='12' md='6'>
                  <BaseFormGroup
                    disabled={true}
                    messageId='register.fullname'
                    fieldName='fullName'
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='12' md='3'>
                  <BaseFormGroupSelect
                    messageId='completeInformation.idType'
                    fieldName='icType'
                    options={IC_TYPES_OPTIONS}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='12' md='3'>
                  <BaseFormGroup
                    messageId='completeInformation.nbrPer'
                    fieldName='icNumber'
                    errors={errors}
                    touched={touched}
                  />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col sm='12' md='6'>
                  <BaseFormDatePicker
                    messageId='completeInformation.dateOfBirth'
                    fieldName='dateOfBirth'
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='12' md='6'>
                  <BaseFormGroupSelect
                    messageId='completeInformation.gender'
                    fieldName='gender'
                    disabled={true}
                    options={GENDER_OPTIONS}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col sm='12' md='6'>
                  <BaseFormGroup
                    disabled={true}
                    messageId='register.phoneNumber'
                    fieldName='phoneNumber'
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='12' md='6'>
                  <BaseFormGroup
                    messageId='register.email'
                    fieldName='email'
                    errors={errors}
                    touched={touched}
                  />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col sm='12'>
                  <BaseFormGroup
                    messageId='completeInformation.address'
                    fieldName='userDetails.address'
                    errors={errors}
                    touched={touched}
                  />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col sm='4'>
                  <BaseFormGroupSelect
                    messageId='completeInformation.province'
                    fieldName='userDetails.city'
                    options={cities}
                    onChange={({ id }) => onChangeCity(id, setFieldValue)}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='4'>
                  <BaseFormGroupSelect
                    messageId='completeInformation.district'
                    fieldName='userDetails.district'
                    options={districts}
                    onChange={({ id }) => onChangeDistrict(id, setFieldValue)}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='4'>
                  <BaseFormGroupSelect
                    messageId='completeInformation.ward'
                    fieldName='userDetails.ward'
                    options={wards}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
              </Row>
              {values.userType === USER_TYPE.KD ? (
                <Row className='mt-2'>
                  <Col sm='4'>
                    <BaseFormGroupSelect
                      messageId='completeInformation.bank'
                      fieldName='userDetails.bankName'
                      options={banks}
                      errors={errors}
                      touched={touched}
                    />
                  </Col>
                  <Col sm='4'>
                    <BaseFormGroup
                      messageId='completeInformation.branch'
                      fieldName='userDetails.bankBranch'
                      errors={errors}
                      touched={touched}
                    />
                  </Col>
                  <Col sm='4'>
                    <BaseFormGroup
                      messageId='completeInformation.accountNbr'
                      fieldName='userDetails.bankAccount'
                      errors={errors}
                      touched={touched}
                    />
                  </Col>
                </Row>
              ) : (
                ''
              )}
              <Row>
                <Col className='d-flex justify-content-end  mt-2' sm='12'>
                  <Button.Ripple type='button' color='secondary' onClick={onClickBackHome}>
                    <FormattedMessage id={`common.home`} />
                  </Button.Ripple>
                  <Button.Ripple className='ml-2' type='submit' color='primary'>
                    <FormattedMessage id={`common.saveChanges`} />
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        <Row />
      </Col>
    </Row>
  )
}

export default UserAccountTab
