import { object, string } from 'yup'
import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Form, Formik} from 'formik'
import {Row, Col, Button} from 'reactstrap'
import BaseFormGroup from '../../components/BaseFormGroup.js'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import BaseFormGroupSelect from '../../components/BaseFormGroupSelect'
import BaseFormDatePicker from '../../components/BaseFormDatePicker'
import {compeleteInfo} from '../../redux/actions/auth'
import {
  CITIZEN_INDENTIFY_REGEX,
  GENDER_OPTIONS,
  IC_TYPES_OPTIONS,
  PASSPORT_REGEX,
  PERSONAL_ID_REGEX,
  PHONE_REGEX,
  VN_COUNTRY_CODE
} from '../../configs/app-configs'
import {
  useBankList,
  useCityList,
  useDistrictList,
  useWardList
} from '../../customHooks/dataCollection'
import {trimObjectValues} from '../../utility'

const CompleteInforValidate = object().shape({
  icNumber: string()
    .required(<FormattedMessage id='completeInformation.nbrPer.required' />)
    .when('icType', {
      is: 'CMND',
      then: string().matches(PERSONAL_ID_REGEX, () => (
        <FormattedMessage id='completeInformation.nbrPer.invalid' />
      )),
    })
    .when('icType', {
      is: 'CCCD',
      then: string().matches(CITIZEN_INDENTIFY_REGEX, () => (
        <FormattedMessage id='completeInformation.nbrPer.invalid' />
      )),
    })
    .when('icType', {
      is: 'HC',
      then: string().matches(PASSPORT_REGEX, () => (
        <FormattedMessage id='completeInformation.nbrPer.invalid' />
      )),
    }),
  dateOfBirth: string().required(
    <FormattedMessage id='completeInformation.dateOfBirth.required' />
  ),
  address: string().required(<FormattedMessage id='completeInformation.address.required' />),
  bankName: string().required(<FormattedMessage id='completeInformation.bank.required' />),
  bankBranch: string().required(<FormattedMessage id='completeInformation.branch.required' />),
  bankNumber: string().required(<FormattedMessage id='completeInformation.accountNbr.required' />),
  city: string().required(<FormattedMessage id='completeInformation.province.required' />),
  ward: string().required(<FormattedMessage id='completeInformation.ward.required' />),
  district: string().required(<FormattedMessage id='completeInformation.district.required' />),
  refCode: string().matches(PHONE_REGEX, () => <FormattedMessage id='register.refCode.invalid' />),
})

const CompleteInformation = () => {
  const user = useSelector((state) => state.auth.register.user)
  const { cities } = useCityList(VN_COUNTRY_CODE)
  const { districts, loadDitrictsByCity } = useDistrictList(cities[0] ? cities[0].id : null)
  const { wards, loadWardsByDistrict } = useWardList(districts[0] ? districts[0].id : null)
  const { banks } = useBankList()
  const dispatch = useDispatch()
  const onSubmit = (values) => {
    dispatch(compeleteInfo(trimObjectValues(values)))
  }
  return (
    <div className='complete-info'>
      <Formik
        enableReinitialize={true}
        initialValues={{
          icType: 'CMND',
          icNumber: '',
          dateOfBirth: '',
          gender: 'MALE',
          city: '',
          district: '',
          ward: '',
          address: '',
          bankName: '',
          bankBranch: '',
          bankNumber: '',
          refCode: user.refByUser,
        }}
        validationSchema={CompleteInforValidate}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <h1 className='landing-page-title'>
              <FormattedMessage id='completeInformation.title' />
            </h1>
            <Row>
              <Col sm='6' className='mb-1'>
                <BaseFormGroupSelect
                  messageId='completeInformation.idType'
                  fieldName='icType'
                  options={IC_TYPES_OPTIONS}
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <BaseFormGroup
                  messageId='completeInformation.nbrPer'
                  fieldName='icNumber'
                  errors={errors}
                  touched={touched}
                />
              </Col>
            </Row>
            <Row>
              <Col sm='6' className='mb-1'>
                <BaseFormDatePicker
                  messageId='completeInformation.dateOfBirth'
                  fieldName='dateOfBirth'
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='6'>
                <BaseFormGroupSelect
                  messageId='completeInformation.gender'
                  fieldName='gender'
                  defaultValue={GENDER_OPTIONS[0]}
                  options={GENDER_OPTIONS}
                  errors={errors}
                  touched={touched}
                />
              </Col>
            </Row>
            <Row>
              <Col sm='4' className='mb-1'>
                <BaseFormGroupSelect
                  messageId='completeInformation.province'
                  fieldName='city'
                  options={cities}
                  onChange={({ id }) => loadDitrictsByCity(id)}
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='4' className='mb-1'>
                <BaseFormGroupSelect
                  messageId='completeInformation.district'
                  fieldName='district'
                  options={districts}
                  onChange={({ id }) => loadWardsByDistrict(id)}
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='4' className='mb-1'>
                <BaseFormGroupSelect
                  messageId='completeInformation.ward'
                  fieldName='ward'
                  options={wards}
                  errors={errors}
                  touched={touched}
                />
              </Col>
            </Row>
            <Row>
              <Col sm='8' className='mb-1'>
                <BaseFormGroup
                  messageId='completeInformation.address'
                  fieldName='address'
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='4' className='mb-1'>
                <BaseFormGroup
                  messageId='completeInformation.gif'
                  fieldName='refCode'
                  isRequired={false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <BaseFormGroupSelect
                  messageId='completeInformation.bank'
                  fieldName='bankName'
                  options={banks}
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='4'>
                <BaseFormGroup
                  messageId='completeInformation.branch'
                  fieldName='bankBranch'
                  errors={errors}
                  touched={touched}
                />
              </Col>
              <Col sm='4'>
                <BaseFormGroup
                  messageId='completeInformation.accountNbr'
                  fieldName='bankNumber'
                  errors={errors}
                  touched={touched}
                />
              </Col>
            </Row>
            <div className='d-flex justify-content-center mt-4'>
              <div className='col-sm-5 col-md-4'>
                <Link to='/create-password'>
                  <Button className='btn-second' type='button'>
                    <FormattedMessage id='completeInformation.back' />
                  </Button>
                </Link>
              </div>
              <div className='col-sm-5 col-md-4'>
                <Button color='primary' type='submit'>
                  <FormattedMessage id='completeInformation.done' />
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CompleteInformation
