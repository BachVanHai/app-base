import { useSelector } from 'react-redux'
import LanguageTab from './tabs/Language'
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
import { Globe, MessageSquare } from 'react-feather'
import ContactTab from './tabs/Contact'
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router-dom'

const GeneralInfo = (props) => {
  const { appId } = useSelector((state) => state.customizer)
  const [activeTab, setActiveTab] = useState('terms-and-condition')
  const history = useHistory()
  useEffect(() => setActiveTab(props.activeTab), [props.activeTab])
  return (
    <Row className='general-info'>
      <Col sm='12'>
        <Card>
          <CardHeader>
            <CardTitle className='text-uppercase'>
              <FormattedMessage id='setting.generalInformation' />
            </CardTitle>
          </CardHeader>
          <CardBody className='pt-2'>
            <Nav tabs={true}>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'language',
                  })}
                  onClick={() => {
                    if (appId === 'APP_NO1') {
                      history.push('/app/language')
                    } else history.push('/language')
                  }}
                >
                  <Globe size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.language' />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'contact',
                  })}
                  onClick={() => {
                    if (appId === 'APP_NO1') {
                      history.push('/app/contact')
                    } else history.push('/contact')
                  }}
                >
                  <MessageSquare size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.contact' />
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='language'>
                <LanguageTab />
              </TabPane>
              <TabPane tabId='contact'>
                <ContactTab />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default GeneralInfo
