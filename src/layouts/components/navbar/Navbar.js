import { useHistory } from 'react-router-dom'
import React from 'react'
import { Navbar, NavItem, NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { logoutAction } from '../../../redux/actions/auth/index'
import NavbarUser from './NavbarUser'
import { Menu } from 'react-feather'
import { IMAGE, NAV_ICONS } from '../../../configs/app-configs'

const ThemeNavbar = (props) => {
  const colorsArr = ['primary', 'danger', 'success', 'info', 'warning', 'dark']
  const navbarTypes = ['floating', 'static', 'sticky', 'hidden']
  const history = useHistory()
  const onClickRedirectToPage = (item) => {
    switch (item) {
      case 'plane':
        history.replace('/app/help-center')
        break
      case 'bus':
        history.replace('/app/help-center')
        break
      case 'personal':
        history.replace('/app/help-center')
        break
      case 'motor':
        history.replace('/app/help-center')
        break
      case 'car':
        history.replace('/app/help-center')
        break
      case 'help-center':
        history.replace('/app/help-center')
        break
      case 'support 24/7':
        history.replace('/app/support/create-request')
        break
      case 'bonus':
        history.replace('/app/bonus-point')
        break
    }
  }
  return (
    <React.Fragment>
      <div className='content-overlay' />
      <div className='header-navbar-shadow' />
      <Navbar
        className={classnames(
          'header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow',
          {
            'navbar-light':
              props.navbarColor === 'default' || !colorsArr.includes(props.navbarColor),
            'navbar-dark': colorsArr.includes(props.navbarColor),
            'bg-primary': props.navbarColor === 'primary' && props.navbarType !== 'static',
            'bg-danger': props.navbarColor === 'danger' && props.navbarType !== 'static',
            'bg-success': props.navbarColor === 'success' && props.navbarType !== 'static',
            'bg-info': props.navbarColor === 'info' && props.navbarType !== 'static',
            'bg-warning': props.navbarColor === 'warning' && props.navbarType !== 'static',
            'bg-dark': props.navbarColor === 'dark' && props.navbarType !== 'static',
            'd-none': props.navbarType === 'hidden' && !props.horizontal,
            'floating-nav':
              (props.navbarType === 'floating' && !props.horizontal) ||
              (!navbarTypes.includes(props.navbarType) && !props.horizontal),
            'navbar-static-top': props.navbarType === 'static' && !props.horizontal,
            'fixed-top': props.navbarType === 'sticky' || props.horizontal,
            scrolling: props.horizontal && props.scrolling,
          }
        )}
      >
        <div className='navbar-wrapper'>
          <div className='navbar-container content'>
            <div
              className='navbar-collapse d-flex justify-content-between align-items-center'
              id='navbar-mobile'
            >
              <div className='bookmark-wrapper'>
                <div className='mr-auto float-left bookmark-wrapper d-flex align-items-center'>
                  <ul className='navbar-nav d-xl-none'>
                    <NavItem className='mobile-menu mr-auto'>
                      <NavLink
                        className='nav-menu-main menu-toggle hidden-xs is-active'
                        onClick={props.sidebarVisibility}
                      >
                        <Menu className='ficon' />
                      </NavLink>
                    </NavItem>
                  </ul>
                  <ul className='nav navbar-nav d-none d-xl-flex bookmark-icons'>
                    {NAV_ICONS.map((item, index) => (
                      <NavItem key={index}>
                        <img
                          onClick={() => onClickRedirectToPage(item)}
                          style={{
                            width: '58px',
                            height: '58px',
                          }}
                          className='img-fluid cursor-pointer'
                          src={IMAGE[`NAV_ICON_${index + 1}`]}
                          alt=''
                        />
                      </NavItem>
                    ))}
                  </ul>
                </div>
              </div>
              <NavbarUser
                handleAppOverlay={props.handleAppOverlay}
                onClickRedirectToPage={onClickRedirectToPage}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: !!state.auth.name,
    roles: state.navbar.roles,
    authToken: state.auth.authToken,
  }
}

export default connect(mapStateToProps, {
  logoutAction,
})(ThemeNavbar)
