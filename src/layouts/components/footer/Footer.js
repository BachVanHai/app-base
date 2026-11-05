import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { Button } from 'reactstrap'
import * as Icon from 'react-feather'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { IMAGE } from '../../../configs/app-configs'
import useWindowDimensions from '../../../customHooks/useWindowDimensions'
import { MAX_MOBILE_WIDTH } from '../../../configs/app-configs'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {goBackHomePage} from "../../../redux/actions/navbar";


const Footer = (props) => {
  const { width } = useWindowDimensions()
  const history = useHistory()
  const dispatch = useDispatch()
  const appId = useSelector((state) => state.customizer.appId)

  const goToPage = (e, navLink) => {
    e.preventDefault()
    history.push(navLink)
  }

  const onClickBackHome = (e) => {
    e.preventDefault();
    dispatch(goBackHomePage())
  }

  return (
    <footer>
      <div
        className={classnames('footer footer-light', {
          'd-none': width < MAX_MOBILE_WIDTH
        })}
      >
        <div className='d-flex justify-content-between'>
          <div className='float-md-left d-block d-md-inline-block mt-25'>
            <div>
              <FormattedMessage id='footer.copyRight' />
            </div>
            <div>
              <FormattedMessage id='footer.companySlogan' />
            </div>
          </div>
          <div className='float-md-right d-none d-md-block'>
            <a
              className='mr-1'
              href='https://www.apple.com/app-store/'
              target='_blank'
            >
              <img src={IMAGE.DOWNLOAD_APP_IOS} alt='DOWNLOAD ON APP STORE' />
            </a>
            <a href='https://play.google.com/store/apps' target='_blank'>
              <img src={IMAGE.DOWNLOAD_APP_ANDROID} alt='DOWNLOAD ON APP I' />
            </a>
          </div>
        </div>
      </div>
      <div
        className={classnames('footer footer-light footer-mobile text-center', {
          'd-none': width >= MAX_MOBILE_WIDTH
        })}
      >
        <div className='w-25'>
          <span onClick={onClickBackHome}>
            <Icon.Home />
            <div className='mt-1'>
              <FormattedMessage id='menu.home' />
            </div>
          </span>
        </div>
        <div className='w-25'>
          <span onClick={(e) => goToPage(e, '/insurance/contracts')}>
            <Icon.List />
            <div className='mt-1'>
              <FormattedMessage id='menu.contract' />
            </div>
          </span>
        </div>
        <div className='position-relative w-25'>
          <span onClick={(e) => goToPage(e, '/insurance/buy-insurance')}>
            <img src={IMAGE.BUY_INSURANCE} className='buy-insurance' alt='' />
            <Icon.PlusCircle style={{ visibility: 'hidden' }} />
            <div className='mt-1'>
              <FormattedMessage id='menu.buyInsurance' />
            </div>
          </span>
        </div>
        <div className='w-25'>
          <span onClick={onClickBackHome}>
            <Icon.Gift />
            <div className='mt-1'>
              <FormattedMessage id='menu.promotion' />
            </div>
          </span>
        </div>
        <div className='w-25'>
          <span onClick={(e) => history.push('/contact')}>
            <Icon.MessageSquare />
            <div className='mt-1'>
              <FormattedMessage id='setting.contact' />
            </div>
          </span>
        </div>
      </div>
      {props.hideScrollToTop === false ? (
        <ScrollToTop showUnder={160}>
          <Button
            color='primary'
            className='btn-icon scroll-top d-none d-md-block'
          >
            <Icon.ArrowUp size={15} />
          </Button>
        </ScrollToTop>
      ) : null}
    </footer>
  )
}

export default Footer
