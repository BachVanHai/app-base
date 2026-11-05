import { POLICY_PDF, TERMS_PDF } from '../../../configs/app-configs'
import { Aperture, FileText, Globe, HelpCircle, Lock, MessageSquare, Power, Shield, User, Users } from 'react-feather'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { DropdownItem, DropdownMenu } from 'reactstrap'
import { useHistory, Link } from 'react-router-dom'
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
        },
      })
    )
  }
  return (
    <DropdownMenu right={true}>
      <DropdownItem tag='a' href='#' onClick={(e) => handleNavigation(e, '/app/account-info')}>
        <User size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.accountInformation' />
        </span>
      </DropdownItem>
      <DropdownItem tag='a' href='#' onClick={(e) => handleNavigation(e, '/app/change-password')}>
        <Lock size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.changePassword' />
        </span>
      </DropdownItem>
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/share-with-friends')}
      >
        <Link size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.shareWithFriends' />
        </span>
      </DropdownItem>
      <DropdownItem divider={true} />
      <DropdownItem tag='a' href='#' onClick={(e) => onClickGoToGuestApp(e)}>
        <Users size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.goToGuestApp' />
        </span>
      </DropdownItem>
      <DropdownItem divider={true} />
      <DropdownItem
        tag='a'
        href='#'
        onClick={(e) => handleNavigation(e, '/app/connect-with-social')}
      >
        <Aperture size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.connectSocial' />
        </span>
      </DropdownItem>
      <DropdownItem tag='a' target='_blank' href={TERMS_PDF}>
        <FileText size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.termAndCondition' />
        </span>
      </DropdownItem>
      <DropdownItem tag='a' target='_blank' href={POLICY_PDF}>
        <Shield size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.privacyPolicy' />
        </span>
      </DropdownItem>
      <DropdownItem tag='a' href='#' onClick={(e) => handleNavigation(e, '/app/language')}>
        <Globe size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.language' />
        </span>
      </DropdownItem>
      <DropdownItem tag='a' href='#' onClick={(e) => handleNavigation(e, '/app/help-center')}>
        <HelpCircle size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.helpCenter' />
        </span>
      </DropdownItem>
      <DropdownItem tag='a' href='#' onClick={(e) => handleNavigation(e, '/app/contact')}>
        <MessageSquare size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='setting.contact' />
        </span>
      </DropdownItem>
      <DropdownItem divider={true} />
      <DropdownItem tag='a' onClick={onClickLogout}>
        <Power size={14} className='mr-50' />
        <span className='align-middle'>
          <FormattedMessage id='navbar.logout' />
        </span>
      </DropdownItem>
    </DropdownMenu>
  )
}

export default UserDropdown
