import React from 'react'
import { useSelector } from 'react-redux'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  shadowBlur: 5,
  barThickness : 5
})

const LoadingSpinner = () => {
  const {isLoading} = useSelector(state => state.ui)
  return isLoading ? <TopBarProgress /> : null
}

export default LoadingSpinner
