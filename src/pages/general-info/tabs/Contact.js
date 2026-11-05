import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'
import { CONTACT_PHONE } from '../../../configs/app-configs'
import useDeviceDetect from '../../../customHooks/useDeviceDetect'
import { goBackHomePage } from '../../../redux/actions/navbar/index'
import { showConfirmAlert } from '../../../redux/actions/ui/index'

const ContactTab = () => {
  const { isMobile } = useDeviceDetect()
  const dispatch = useDispatch()
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
  const onClickCall = () => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='setting.call' />,
        isShow: true,
        content: (
          <FormattedMessage
            id='setting.call.confirmMessage'
            values={{
              phoneNumber: CONTACT_PHONE,
            }}
          />
        ),
        onConfirm: () => {
          window.open(`tel:0899300800`, '_blank')
        },
      })
    )
  }
  return (
    <React.Fragment>
      <Row className='d-flex justify-content-center'>
        <Col lg='4' md='6' sm='12'>
          <Card>
            <CardBody className='w-300px mx-auto'>
              <div className='box-content'>
                <a href='mailto:lienhe@bmktech.com.vn' target='_blank'>
                  lienhe@bmktech.com.vn
                </a>
              </div>
              <div className='card-btns d-flex justify-content-center mt-2'>
                <Button.Ripple className='gradient-light-primary text-white'>
                  <a className='text-white' href='mailto:lienhe@bmktech.com.vn' target='_blank'>
                    <FormattedMessage id={`setting.sendEmail`} />
                  </a>
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' md='6' sm='12'>
          <Card>
            <CardBody className='w-300px mx-auto'>
              <div className='box-content'>
                <h5>{CONTACT_PHONE}</h5>
              </div>
              <div className='card-btns d-flex justify-content-center mt-2'>
                {isMobile ? (
                  <Button.Ripple
                    className='gradient-light-primary text-white'
                    onClick={onClickCall}
                  >
                    <FormattedMessage id={`setting.call`} />
                  </Button.Ripple>
                ) : (
                  ''
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-end flex-wrap mt-2' sm='12'>
          <Button.Ripple type='button' color='secondary' onClick={onClickBackHome}>
            <FormattedMessage id={`common.home`} />
          </Button.Ripple>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ContactTab
