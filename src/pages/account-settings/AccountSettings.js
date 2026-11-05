import React, { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardHeader,
  CardTitle
} from 'reactstrap'
import classnames from 'classnames'
import {User, Lock, Share, Link} from 'react-feather'
import AccountTab from './tabs/Account'
import ChangePassword from './tabs/ChangePassword'
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router-dom'
import {ShareWithFriends} from "./tabs/ShareWithFriends";

const AccountSettings = (props) => {
  const [activeTab, setActiveTab] = useState('account-info')
  const history = useHistory()
  useEffect(() => setActiveTab(props.activeTab), [props.activeTab])

  return (
    <Row>
      <Col sm='12'>
        <Card>
          <CardHeader>
            <CardTitle className='text-uppercase'>
              <FormattedMessage id={'setting.personalSetting'} />
            </CardTitle>
          </CardHeader>
          <CardBody className='pt-2'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'account-info'
                  })}
                  onClick={() => {
                    history.push('/account-info')
                  }}
                >
                  <User size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.accountInformation' />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'change-password'
                  })}
                  onClick={() => {
                    history.push('/change-password')
                  }}
                >
                  <Lock size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.changePassword' />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'share-with-friends'
                  })}
                  onClick={() => {
                    history.push('/share-with-friends')
                  }}
                >
                  <Link size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.shareWithFriends' />
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='account-info'>
                <AccountTab />
              </TabPane>
              <TabPane tabId='change-password'>
                <Col md='6' sm='11' className='mx-auto'>
                  <ChangePassword />
                </Col>
              </TabPane>
              <TabPane tabId='share-with-friends'>
                <Col md='6' sm='11' className='mx-auto'>
                  <ShareWithFriends />
                </Col>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
export default AccountSettings
