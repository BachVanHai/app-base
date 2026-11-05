import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { numberFormat } from '../../utility'
import { RESOURCE_URL } from '../../configs/app-configs'
import { FormattedMessage } from 'react-intl'
import { DollarSign } from 'react-feather'
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import BonusPointItem from './BonusPointItem'
import { BonusHistoryService } from '../../services/bonusHistoryService'
import React from 'react'

export const BonusPointMainStyled = styled.div`
  position: absolute;
  padding: 3rem;
  top: 0;
  left: 0;

  .bonus-point__title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`

const BonusPoint = () => {
  const { user } = useSelector((state) => state.auth)
  const [active, setActive] = useState('1')
  const [bonusPointHistory, setBonusPointHistory] = useState()
  const [bonusPointReceived, setBonusPointReceived] = useState()
  const [bonusPointUsed, setBonusPointUsed] = useState()
  const [bonusPointTotal, setBonusPointTotal] = useState()
  const [bonus, setBonus] = useState(0)
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const getBonusPointData = async () => {
    const bonusPointReceivedData = await BonusHistoryService.getBonusTransactionByUser(user.id)
    const bonusPointUsedData = await BonusHistoryService.getBonusDrawvalTransactionByUser(user.id)
    if (bonusPointReceivedData.status === 200) {
      setBonusPointReceived(bonusPointReceivedData.data)
    }
    let bonusPointUsed = 0
    if (bonusPointUsedData.status === 200) {
      setBonusPointUsed(bonusPointUsedData.data)
    }
    setBonusPointTotal((bonusPointReceived - bonusPointUsed).toFixed(2))
    let bonusHistoryData = bonusPointReceivedData.data.concat(bonusPointUsedData.data)
    let sortedData = bonusHistoryData.sort(
      (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    )
    setBonusPointHistory(sortedData)
  }
  const getBonusForUserId = async () => {
    const res = await BonusHistoryService.getBonusByUserId(user.id)
    if (res.status === 200) {
      const total = String(res.data.totalBonusValue) || 0
      const result = total.split('.')[0]
      setBonus(result)
    }
  }
  useEffect(() => {
    getBonusPointData().then()
    getBonusForUserId()
  }, [])
  return (
    <Card>
      <CardHeader className='justify-content-center'>
        <div className='bonus-point position-relative'>
          <img src={RESOURCE_URL + 'bonus-point-bg.svg'} alt='' className='d-none d-md-block' />
          <img
            src={RESOURCE_URL + 'bonus-point-mobile-bg.png'}
            alt=''
            className='d-block d-md-none'
          />
          <BonusPointMainStyled>
            <div className='d-flex justify-content-between'>
              <div className='bonus-point__title'>
                <FormattedMessage id='bonusPoint.availablePoint' />
              </div>
              <DollarSign />
            </div>
            <h2 className='bonus-point__number font-weight-bolder mb-2 text-success'>
              {isNaN(bonus) ? 0 : numberFormat(bonus)}
            </h2>
            <div className='bonus-point__description'>
              <FormattedMessage id='bonusPoint.uses' />
            </div>
          </BonusPointMainStyled>
        </div>
      </CardHeader>
      <CardBody>
        <Nav tabs={true} justified={true}>
          <NavItem>
            <NavLink
              className='text-uppercase'
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              <FormattedMessage id='bonusPoint.history' />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className='text-uppercase'
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              <FormattedMessage id='bonusPoint.used' />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className='py-50' activeTab={active}>
          <TabPane tabId='1'>
            {bonusPointHistory ? <BonusPointItem items={bonusPointHistory} /> : null}
          </TabPane>
          <TabPane tabId='3'>
            {bonusPointUsed ? <BonusPointItem items={bonusPointUsed} /> : null}
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  )
}

export default BonusPoint
