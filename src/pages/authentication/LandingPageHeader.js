import React from 'react'
import { IntlContext as Context } from '../../utility/context/Internationalization'
import {IMAGE} from "../../configs/app-configs";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown} from "reactstrap";

const LandingPageHeader = () => (
  <Context.Consumer>
    {(context) => (
      <React.Fragment>
        <div className='d-flex justify-content-between align-items-center'>
          <a href='https://bmktech.vn/'>
            <span className='d-block d-lg-none'>
              <img src={IMAGE.LOGO} alt='logo' />
            </span>
          </a>
          <div className='languages d-flex align-items-center'>
            <UncontrolledButtonDropdown direction='left'>
              <DropdownToggle color='primary' tag='div' className='cursor-pointer'>
                {context.state.locale === 'en' ? (
                  <img
                    alt='usa-icon'
                    className='cursor-pointer'
                    src='https://img.icons8.com/color/48/000000/usa.png'
                  />
                ) : (
                  <img alt='vn-icon' src='https://img.icons8.com/color/48/000000/vietnam.png' />
                )}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  tag='div'
                  className='text-center'
                  onClick={() => context.switchLanguage('en')}
                >
                  <img
                    alt='usa-icon'
                    className='cursor-pointer'
                    src='https://img.icons8.com/color/48/000000/usa.png'
                  />
                </DropdownItem>
                <DropdownItem
                  tag='div'
                  className='d-flex justify-content-center'
                  onClick={() => context.switchLanguage('vi')}
                >
                  <img alt='vn-icon' src='https://img.icons8.com/color/48/000000/vietnam.png' />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      </React.Fragment>
    )}
  </Context.Consumer>
)

export default LandingPageHeader
