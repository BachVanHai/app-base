import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Card, CardBody, Col, Row, Button } from 'reactstrap'
import { TERMS } from '../../../assets/data/terms'
import { goBackHomePage } from '../../../redux/actions/navbar/Index'
import { showConfirmAlert } from '../../../redux/actions/ui/Index'
import InfoItems from './InfoItems'

const Terms = () => {
  const dispatch = useDispatch()

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
    <React.Fragment>
      <Card>
        <CardBody>
          <div className='vx-collapse'>
            <InfoItems data={TERMS} type='terms' />
          </div>
          <Row>
            <Col className='d-flex justify-content-end flex-wrap mt-2' sm='12'>
              <Button.Ripple
                type='button'
                color='secondary'
                onClick={onClickBackHome}
              >
                <FormattedMessage id={`common.home`} />
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default Terms
