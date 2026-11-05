import React, {useEffect, useState} from 'react'
import {Media, Row, Col, Button, Input} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import * as Yup from 'yup'
import {FormattedMessage} from 'react-intl'
import {Formik, Form} from 'formik'
import BaseFormGroup from '../../../components/BaseFormGroup'
import BaseFormDatePicker from '../../../components/BaseFormDatePicker'
import {
  GENDER_OPTIONS,
  VN_COUNTRY_CODE,
  USER_TYPE,
  PASSPORT_REGEX,
  PERSONAL_ID_REGEX,
  CITIZEN_INDENTIFY_REGEX,
  NAME_REGEX,
  IC_TYPES_OPTIONS,
  MAX_FILE_SIZE
} from '../../../configs/app-configs'
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

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(<FormattedMessage id='register.fullname.required'/>)
    .matches(NAME_REGEX, () => (
      <FormattedMessage id='register.fullname.invalid'/>
    )),
  icType: Yup.string().required(
    <FormattedMessage id='completeInformation.nbrPer.required'/>
  ),
  icNumber: Yup.string()
    .required(<FormattedMessage id='completeInformation.nbrPer.required'/>)
    .when('icType', {
      is: 'CMND',
      then: Yup.string().matches(PERSONAL_ID_REGEX, () => (
        <FormattedMessage id='completeInformation.nbrPer.invalid'/>
      ))
    })
    .when('icType', {
      is: 'CCCD',
      then: Yup.string().matches(CITIZEN_INDENTIFY_REGEX, () => (
        <FormattedMessage id='completeInformation.nbrPer.invalid'/>
      ))
    })
    .when('icType', {
      is: 'HC',
      then: Yup.string().matches(PASSPORT_REGEX, () => (
        <FormattedMessage id='completeInformation.nbrPer.invalid'/>
      ))
    }),
  dateOfBirth: Yup.string().required(
    <FormattedMessage id='completeInformation.dateOfBirth.required'/>
  ),
  email: Yup.string()
    .required(<FormattedMessage id='register.email.required'/>)
    .email(<FormattedMessage id='register.email.invalid'/>),
  userDetails: Yup.object().shape({
    address: Yup.string().required(
      <FormattedMessage id='completeInformation.address.required'/>
    ),
    // bankAccount: Yup.string().when('userType', {
    //   is: USER_TYPE.KD,
    //   then: Yup.string().required(
    //     <FormattedMessage id='completeInformation.accountNbr.required' />
    //   )
    // }),
    // bankName: Yup.string().when('userType', {
    //   is: USER_TYPE.KD,
    //   then: Yup.string().required(
    //     <FormattedMessage id='completeInformation.bank.required' />
    //   )
    // }),
    // bankBranch: Yup.string().when('userType', {
    //   is: USER_TYPE.KD,
    //   then: Yup.string().required(
    //     <FormattedMessage id='completeInformation.branch.required' />
    //   )
    // }),
    city: Yup.string().required(
      <FormattedMessage id='completeInformation.province.required'/>
    ),
    ward: Yup.string().required(
      <FormattedMessage id='completeInformation.ward.required'/>
    ),
    district: Yup.string().required(
      <FormattedMessage id='completeInformation.district.required'/>
    )
  })
})

const UserAccountTab = () => {
  const {appId} = useSelector((state) => state.customizer)
  let {userDetails = {}, userSettings = {}, ...user} = useSelector(
    (state) => appId !== AppId.ELITE_APP ? state.auth.user : state.auth.guest.user
  )
  const dispatch = useDispatch()
  const {cities} = useCityList(VN_COUNTRY_CODE)
  const {districts, loadDitrictsByCity} = useDistrictList(null)
  const {wards, loadWardsByDistrict} = useWardList(null)
  const {banks} = useBankList()
  const [avatar, setAvatar] = useState({url: userSettings.avatar, file: null})

  useEffect(() => {
    if (userDetails && userDetails.city) {
      loadDitrictsByCity(userDetails.city)
      loadWardsByDistrict(userDetails.district)
      // userDetails.userType = user.userType
    }
  }, [])

  const onChangeAvatar = (e) => {
    const validTypeExtension = [
      'jpg',
      'jpeg',
      'bmp',
      'gif',
      'png',
      'HEIF',
      'HEVC',
      'heic'
    ]
    const file = e.target.files[0]
    if (!file) {
      return
    }
    const fileType = file.type.split('/').pop().toLowerCase()
    if (validTypeExtension.indexOf(fileType) < 0) {
      toastError(<FormattedMessage id='setting.updateInfo.imageTypeInvalid'/>)
      return
    }
    if (bytesToMb(file.size) >= MAX_FILE_SIZE) {
      toastError(
        <FormattedMessage
          id='setting.updateInfo.imageExceedSize'
          values={{size: MAX_FILE_SIZE}}
        />
      )
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      setAvatar({url: reader.result, file})
    }
  }

  const onSubmit = async (values) => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='setting.accountInformation'/>,
        isShow: true,
        content: <FormattedMessage id='setting.updateInfo.confirmMessage'/>,
        onConfirm: () => {
          dispatch(updateUserInfo(trimObjectValues(values), avatar.file))
        }
      })
    )
  }

  const onClickBackHome = () => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='common.home'/>,
        isShow: true,
        content: <FormattedMessage id='common.backHome.confirmMessage'/>,
        onConfirm: () => {
          dispatch(goBackHomePage())
        }
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
              object
              src={avatar.url}
              alt='user profile image'
              height='84'
              width='84'
            />
          </Media>
          <Media className='mt-2' body>
            <Media
              className='font-medium-1 text-bold-600'
              style={{textTransform: 'uppercase'}}
              tag='p'
              heading
            >
              {user.fullName}
            </Media>
            <div>
              <FormattedMessage id='setting.accountCode'/> : {user.userCode}
            </div>
            <div className='d-flex flex-wrap'>
              <Button.Ripple
                tag='label'
                className='mr-1 mt-2'
                color='primary'
                outline
              >
                <Input
                  type='file'
                  name='file'
                  id='uploadImg'
                  onChange={onChangeAvatar}
                  hidden
                  accept='image/*'
                />
                <FormattedMessage id='setting.change'/>
              </Button.Ripple>
            </div>
          </Media>
        </Media>
      </Col>
      <Col sm='12'>
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={{
            ...user,
            dateOfBirth: user.dateOfBirth || moment().subtract(15, 'years').toISOString(),
            userDetails,
            userSettings
          }}
        >
          {({errors, touched, values, setFieldValue}) => (
            <Form>
              <Row className='mt-2'>
                <Col sm='12' md='6'>
                  <BaseFormGroup
                    disabled
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
                  ></BaseFormGroup>
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
                    disabled
                    options={GENDER_OPTIONS}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col sm='12' md='6'>
                  <BaseFormGroup
                    disabled
                    messageId='register.phoneNumber'
                    fieldName='phoneNumber'
                    errors={errors}
                    touched={touched}
                  ></BaseFormGroup>
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
                    onChange={({id}) => onChangeCity(id, setFieldValue)}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <Col sm='4'>
                  <BaseFormGroupSelect
                    messageId='completeInformation.district'
                    fieldName='userDetails.district'
                    options={districts}
                    onChange={({id}) => onChangeDistrict(id, setFieldValue)}
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
                  <Button.Ripple
                    type='button'
                    color='secondary'
                    onClick={onClickBackHome}
                  >
                    <FormattedMessage id={`common.home`}/>
                  </Button.Ripple>

                  <Button.Ripple className='ml-2' type='submit' color='primary'>
                    <FormattedMessage id={`common.saveChanges`}/>
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        <Row></Row>
      </Col>
    </Row>
  )
}
export default UserAccountTab
