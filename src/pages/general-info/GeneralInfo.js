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
import { Shield, Globe, MessageSquare, FileText } from 'react-feather'
import TermsTab from './tabs/Terms'
import LangTab from './tabs/Language'
import PolicyTab from './tabs/Policies'
import ContactTab from './tabs/Contact'
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router-dom'
import '../../assets/scss/pages/general-info.scss'

const GeneralInfo = (props) => {
  const [activeTab, setActiveTab] = useState('terms-and-condition')

  const history = useHistory()

  useEffect(() => setActiveTab(props.activeTab), [props.activeTab])

  return (
    <Row className='general-info'>
      <Col sm='12'>
        <Card>
          <CardHeader>
            <CardTitle className='text-uppercase'>
              <FormattedMessage id={'setting.generalInformation'} />
            </CardTitle>
          </CardHeader>
          <CardBody className='pt-2'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'terms-and-condition'
                  })}
                  onClick={() => {
                    history.push('/terms-and-condition')
                  }}
                >
                  <FileText size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.termAndCondition' />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'privacy-policy'
                  })}
                  onClick={() => {
                    history.push('/privacy-policy')
                  }}
                >
                  <Shield size={16} />
                  <span className='align-middle ml-50'>
                    <FormattedMessage id='setting.privacyPolicy' />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === 'language'
                  })}
                  onClick={() => {
                    history.push('/language')
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
                    active: activeTab === 'contact'
                  })}
                  onClick={() => {
                    history.push('/contact')
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
              <TabPane tabId='terms-and-condition'>
                <TermsTab />
              </TabPane>
              <TabPane tabId='privacy-policy'>
                <PolicyTab />
              </TabPane>
              <TabPane tabId='language'>
                <LangTab />
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
