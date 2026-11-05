import React from 'react'
import { FormattedMessage } from 'react-intl'
import { DropdownItem, DropdownMenu } from 'reactstrap'
import * as Icon from 'react-feather'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showConfirmAlert } from '../../../redux/actions/ui'
import {goToGuestApp, logoutAction} from '../../../redux/actions/auth'

const UserDropdown = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleNavigation = (e, path) => {
    e.preventDefault()
    history.push(path)
  }

  const onClickGoToGuestApp = (e) => {
    e.preventDefault()
    dispatch(goToGuestApp())
  }

  const onClickLogout = () => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='navbar.logout' />,
        isShow: true,
        content: <FormattedMessage id='navbar.logout.confirmMessage' />,
        onConfirm: () => {
          dispatch(logoutAction())
        }
      })
    )
  }

  return (
    <DropdownMenu right>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/account-info')}
      >
        <Icon.User size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.accountInformation' />
        </span>
      </DropdownItem>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/change-password')}
      >
        <Icon.Lock size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.changePassword' />
        </span>
      </DropdownItem>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/share-with-friends')}
      >
        <Icon.Link size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.shareWithFriends' />
        </span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => onClickGoToGuestApp(e)}
      >
        <Icon.Users size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.goToGuestApp' />
        </span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/terms-and-condition')}
      >
        <Icon.FileText size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.termAndCondition' />
        </span>
      </DropdownItem>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/privacy-policy')}
      >
        <Icon.Shield size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.privacyPolicy' />
        </span>
      </DropdownItem>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/language')}
      >
        <Icon.Globe size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.language' />
        </span>
      </DropdownItem>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/contact')}
      >
        <Icon.MessageSquare size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.contact' />
        </span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag='a' onClick={onClickLogout}>
        <Icon.Power size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='navbar.logout' />
        </span>
      </DropdownItem>
    </DropdownMenu>
  )
}

export default UserDropdown
