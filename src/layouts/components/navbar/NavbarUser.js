import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { DollarSign, Search, X } from 'react-feather'
import Bells from './Bells'
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
import { useIntl } from 'react-intl'
import { getExternalAppUrl } from '../../../configs/app-configs'

const NavbarUser = (props) => {
  let { userSettings, userDetails, ...user } = useSelector((state) => state.auth.user)
  let { appId } = useSelector((state) => state.customizer)
  let { roles = [] } = useSelector((state) => state.navbar)
  const [navbarSearch, setNavbarSearch] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const intl = useIntl()
  userSettings = userSettings || {}
  useEffect(() => {
    let roleData = []
    if (Array.isArray(roles)) {
      roleData = [...roles]
    }
    const newSuggestions = roleData.map((item) => {
      item.name = intl.formatMessage({
        id: `menu.${item.keyLang}`,
        defaultMessage: item.description,
      })
      item.isExternalApp = false
      item.navLinkExternal = getExternalAppUrl(item.appId, item.menuPath)
      return item
    })
    setSuggestions(newSuggestions)
  }, [roles])
  const handleNavbarSearch = () => {
    setNavbarSearch((prevState) => !prevState)
  }
  const handleNavigation = (e, path) => {
    e.preventDefault()
    history.push(path)
  }
  const onSuggestionItemClick = (item) => {
    history.push(item.navLinkExternal)
  }
  return (
    <React.Fragment>
      <ul className='nav navbar-nav navbar-nav-user float-right'>
        <NavItem className='nav-search'>
          <NavLink
            className='nav-link-search pt-2'
            onClick={(e) => handleNavigation(e, '/app/bonus-point')}
          >
            <DollarSign size={21} color='#338955' />
          </NavLink>
        </NavItem>
        <NavItem className='nav-search' onClick={handleNavbarSearch}>
          <NavLink className='nav-link-search pt-2'>
            <Search size={21} data-tour='search' />
          </NavLink>
          <div
            className={classnames('search-input', {
              open: navbarSearch,
              'd-none': navbarSearch === false,
            })}
          >
            <div className='search-input-icon'>
              <Search size={17} className='primary' />
            </div>
            <Autocomplete
              className='form-control'
              suggestions={suggestions}
              filterKey='name'
              onSuggestionClick={onSuggestionItemClick}
              autoFocus={true}
              clearInput={navbarSearch}
              externalClick={() => {
                setNavbarSearch(false)
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 27 || e.keyCode === 13) {
                  setNavbarSearch(false)
                  props.handleAppOverlay('')
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
                      active: filteredData.indexOf(item) === activeSuggestion,
                    })}
                    key={i}
                    onClick={(e) => onSuggestionItemClick(item, e)}
                    onMouseEnter={() => onSuggestionItemHover(filteredData.indexOf(item))}
                  >
                    <div className='d-flex align-items-center'>
                      <IconTag size={17} />
                      <div className='ml-2'>{item.name}</div>
                    </div>
                  </li>
                )
              }}
              onSuggestionsShown={(userInput) => {
                if (navbarSearch) {
                  props.handleAppOverlay(userInput)
                }
              }}
            />
            <div className='search-input-close'>
              <X
                size={24}
                onClick={(e) => {
                  e.stopPropagation()
                  setNavbarSearch(false)
                  props.handleAppOverlay('')
                }}
              />
            </div>
          </div>
        </NavItem>
        <Bells />
        <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
          <DropdownToggle tag='a' className='nav-link dropdown-user-link'>
            <div className='user-nav d-sm-flex d-none'>
              <span className='user-name text-bold-600 mb-0'>{user.fullName}</span>
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
    </React.Fragment>
  )
}

export default NavbarUser
