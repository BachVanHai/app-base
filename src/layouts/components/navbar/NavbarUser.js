import React from 'react'
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap'
import * as Icon from 'react-feather'
import classnames from 'classnames'
import Autocomplete from '../../../components/AutoCompleteComponent'
import UserDropdown from './UserDropDown'
import { history } from '../../../history'
import { injectIntl } from 'react-intl'
import { getExternalAppUrl } from '../../../configs/app-configs'

class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    suggestions: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.roles !== this.props.roles) {
      const suggestions = this.props.roles.map((item) => {
        item.name = this.props.intl.formatMessage({
          id: `menu.${item.keyLang}`
        })
        item.isExternalApp = item.appId !== this.props.appId
        item.navLinkExternal =  getExternalAppUrl(item.appId, item.menuPath);
        return item
      })
      this.setState({
        suggestions
      })
    }
  }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }

  getCountryCode = (locale) => {
    const countryCode = { en: 'us', vi: 'vn' }
    return countryCode[locale]
  }

  onSuggestionItemClick = (item) => {
    if (!item.isExternalApp) {
      history.push(`${item.menuPath}`)
    } else {
      window.location.href = item.navLinkExternal
    }
  }

  render() {
    let { userSettings, userDetails, ...user } = this.props.user

    userSettings = userSettings || {}
    userDetails = userDetails || {}


    return (
      <ul className='nav navbar-nav navbar-nav-user float-right'>
        <NavItem className='nav-search' onClick={this.handleNavbarSearch}>
          <NavLink className='nav-link-search pt-2'>
            <Icon.Search size={21} data-tour='search' />
          </NavLink>
          <div
            className={classnames('search-input', {
              open: this.state.navbarSearch,
              'd-none': this.state.navbarSearch === false
            })}
          >
            <div className='search-input-icon'>
              <Icon.Search size={17} className='primary' />
            </div>
            <Autocomplete
              className='form-control'
              suggestions={this.state.suggestions}
              filterKey='name'
              onSuggestionClick={this.onSuggestionItemClick}
              autoFocus={true}
              clearInput={this.state.navbarSearch}
              externalClick={() => {
                this.setState({ navbarSearch: false })
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 27 || e.keyCode === 13) {
                  this.setState({
                    navbarSearch: false
                  })
                  this.props.handleAppOverlay('')
                }
              }}
              customRender={(
                item,
                i,
                filteredData,
                activeSuggestion,
                onSuggestionItemClick,
                onSuggestionItemHover
              ) => {
                const IconTag = Icon[item.icon ? item.icon : 'X']
                return (
                  <li
                    className={classnames('suggestion-item', {
                      active: filteredData.indexOf(item) === activeSuggestion
                    })}
                    key={i}
                    onClick={(e) => onSuggestionItemClick(item, e)}
                    onMouseEnter={() =>
                      onSuggestionItemHover(filteredData.indexOf(item))
                    }
                  >
                    <div className='d-flex align-items-center'>
                      <IconTag size={17} />
                      <div className='ml-2'>{item.name}</div>
                    </div>
                  </li>
                )
              }}
              onSuggestionsShown={(userInput) => {
                if (this.state.navbarSearch) {
                  this.props.handleAppOverlay(userInput)
                }
              }}
            />
            <div className='search-input-close'>
              <Icon.X
                size={24}
                onClick={(e) => {
                  e.stopPropagation()
                  this.setState({
                    navbarSearch: false
                  })
                  this.props.handleAppOverlay('')
                }}
              />
            </div>
          </div>
        </NavItem>
        <UncontrolledDropdown
          tag='li'
          className='dropdown-notification nav-item'
        >
          <DropdownToggle tag='a' className='nav-link nav-link-label'>
            <Icon.Bell size={21} />
          </DropdownToggle>
          {/* <DropdownMenu tag='ul' right className='dropdown-menu-media'>
            <li className='dropdown-menu-header'>
              <div className='dropdown-header mt-0'>
                <h3 className='text-white'>5 New</h3>
                <span className='notification-title'>App Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className='media-list overflow-hidden position-relative'
              options={{
                wheelPropagation: false
              }}
            >
              <div className='d-flex justify-content-between'>
                <Media className='d-flex align-items-start'>
                  <Media left href='#'>
                    <Icon.PlusSquare
                      className='font-medium-5 primary'
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className='primary media-heading' tag='h6'>
                      You have new order!
                    </Media>
                    <p className='notification-text'>
                      Are your going to meet me tonight?
                    </p>
                  </Media>
                  <small>
                    <time
                      className='media-meta'
                      dateTime='2015-06-11T18:29:20+08:00'
                    >
                      9 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className='d-flex justify-content-between'>
                <Media className='d-flex align-items-start'>
                  <Media left href='#'>
                    <Icon.DownloadCloud
                      className='font-medium-5 success'
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className='success media-heading' tag='h6'>
                      99% Server load
                    </Media>
                    <p className='notification-text'>
                      You got new order of goods?
                    </p>
                  </Media>
                  <small>
                    <time
                      className='media-meta'
                      dateTime='2015-06-11T18:29:20+08:00'
                    >
                      5 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className='d-flex justify-content-between'>
                <Media className='d-flex align-items-start'>
                  <Media left href='#'>
                    <Icon.AlertTriangle
                      className='font-medium-5 danger'
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className='danger media-heading' tag='h6'>
                      Warning Notification
                    </Media>
                    <p className='notification-text'>
                      Server has used 99% of CPU
                    </p>
                  </Media>
                  <small>
                    <time
                      className='media-meta'
                      dateTime='2015-06-11T18:29:20+08:00'
                    >
                      Today
                    </time>
                  </small>
                </Media>
              </div>
              <div className='d-flex justify-content-between'>
                <Media className='d-flex align-items-start'>
                  <Media left href='#'>
                    <Icon.CheckCircle
                      className='font-medium-5 info'
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className='info media-heading' tag='h6'>
                      Complete the task
                    </Media>
                    <p className='notification-text'>
                      One of your task is pending.
                    </p>
                  </Media>
                  <small>
                    <time
                      className='media-meta'
                      dateTime='2015-06-11T18:29:20+08:00'
                    >
                      Last week
                    </time>
                  </small>
                </Media>
              </div>
              <div className='d-flex justify-content-between'>
                <Media className='d-flex align-items-start'>
                  <Media left href='#'>
                    <Icon.File className='font-medium-5 warning' size={21} />
                  </Media>
                  <Media body>
                    <Media heading className='warning media-heading' tag='h6'>
                      Generate monthly report
                    </Media>
                    <p className='notification-text'>
                      Reminder to generate monthly report
                    </p>
                  </Media>
                  <small>
                    <time
                      className='media-meta'
                      dateTime='2015-06-11T18:29:20+08:00'
                    >
                      Last month
                    </time>
                  </small>
                </Media>
              </div>
            </PerfectScrollbar>
            <li className='dropdown-menu-footer'>
              <DropdownItem tag='a' className='p-1 text-center'>
                <span className='align-middle'>Read all notifications</span>
              </DropdownItem>
            </li>
          </DropdownMenu> */}
        </UncontrolledDropdown>
        <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
          <DropdownToggle tag='a' className='nav-link dropdown-user-link'>
            <div className='user-nav d-sm-flex d-none'>
              <span className='user-name text-bold-600 mb-0'>
                {user.fullName}
              </span>
            </div>
            <span data-tour='user'>
              <img
                src={userSettings.avatar || ''}
                className='round'
                height='40'
                width='40'
                alt='avatar'
              />
            </span>
          </DropdownToggle>
          <UserDropdown />
        </UncontrolledDropdown>
      </ul>
    )
  }
}
export default injectIntl(NavbarUser)
