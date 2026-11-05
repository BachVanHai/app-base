import { RESOURCE_URL } from '../configs/app-configs'
import React from 'react'
import { useSelector } from 'react-redux'

const LoadingSpinner = () => {
  const { isLoading } = useSelector((state) => state.ui)
  return isLoading ? (
    <React.Fragment>
      <div className='app-loading'>
        <div className='load-icon'>
          <div className='loader' />
          <img alt='InOn-logo' src={`${RESOURCE_URL}InOn-logo.svg`} />
        </div>
        <div className='fade' />
      </div>
    </React.Fragment>
  ) : null
}

export default LoadingSpinner
