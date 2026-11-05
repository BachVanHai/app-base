import React from 'react'
import {IntlContext} from '../../utility/context/Internationalization'
import {IMAGE} from "../../configs/app-configs";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown} from "reactstrap";
import {Link} from "react-router-dom";

const LandingPageHeader = () => (
  <IntlContext.Consumer>
    {(context) => (
      <React.Fragment>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to={'/'}>
          <span className='d-block d-lg-none'>
              <img
                src={IMAGE.LOGO}
                alt='logo'
              />
          </span>
          </Link>
          <div className='languages d-flex align-items-center'>
            <UncontrolledButtonDropdown direction='left'>
              <DropdownToggle color='primary' tag='div' className='cursor-pointer'>
                {context.state.locale === 'en' ? <img alt='usa-icon' className='cursor-pointer'
                                                      src="https://img.icons8.com/color/48/000000/usa.png"/> :
                  <img alt='vn-icon' src="https://img.icons8.com/color/48/000000/vietnam.png"/>}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag='div' className='text-center' onClick={() => context.switchLanguage('en')}>
                  <img alt='usa-icon' className='cursor-pointer' src="https://img.icons8.com/color/48/000000/usa.png"/>
                </DropdownItem>
                <DropdownItem tag='div' className='d-flex justify-content-center'
                              onClick={() => context.switchLanguage('vi')}>
                  <img alt='vn-icon' src="https://img.icons8.com/color/48/000000/vietnam.png"/>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      </React.Fragment>
    )}
  </IntlContext.Consumer>
)

export default LandingPageHeader
