import { verifyAccount } from '../../redux/actions/auth'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE } from '../../configs/app-configs'
import { FormattedMessage } from 'react-intl'
import { Button, Spinner } from 'reactstrap'
import React from 'react'

const VerifyAccount = () => {
  const { status } = useSelector((state) => state.auth.verifyAccount)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    dispatch(verifyAccount(token))
  }, [history])
  const renderVerifyStatus = () => {
    if (status === 'SUCCESS') {
      return (
        <React.Fragment>
          <div
            style={{
              width: '100px',
            }}
            className='mx-auto'
          >
            <img src={IMAGE.CHECK_ICON} className='img-fluid' alt='success-icon' />
          </div>
          <div className='mt-2'>
            <FormattedMessage id='verifyAccount.success' />
          </div>
          <div className='mt-2'>
            <Button.Ripple onClick={() => history.push('/reset-password')}>
              <FormattedMessage id='verifyAccount.createPassword' />
            </Button.Ripple>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div
            style={{
              width: '100px',
            }}
            className='mx-auto'
          >
            <img src={IMAGE.FAIL_ICON} className='img-fluid' alt='failure-icon' />
          </div>
          <div className='mt-2'>
            <FormattedMessage id='verifyAccount.fail' />
          </div>
        </React.Fragment>
      )
    }
  }
  return (
    <div className='verify-account'>
      <div className='text-center mb-3'>
        <h4 className='font-weight-bold text-white'>
          <FormattedMessage id='verifyAccount.title' />
        </h4>
        {!status ? (
          <div className='mt-4 d-flex align-items-center justify-content-center'>
            <Spinner color='primary' />
            <span className='ml-1'>
              <FormattedMessage id='verifyAccount.loading' />
            </span>
          </div>
        ) : (
          <div className='text-center p-2'>{renderVerifyStatus()}</div>
        )}
      </div>
    </div>
  )
}

export default VerifyAccount
