import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { POLICIES } from '../../../assets/data/policies'
import { goBackHomePage } from '../../../redux/actions/navbar/Index'
import { showConfirmAlert } from '../../../redux/actions/ui/Index'
import InfoItems from './InfoItems'

const Policies = () => {
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
            <InfoItems data={POLICIES} type='policy' />
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
export default Policies
