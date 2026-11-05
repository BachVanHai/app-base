import React from 'react'
import '../assets/scss/components/app-loader.scss'
import {IMAGE} from '../configs/app-configs'

class FallbackSpinner extends React.Component {
  render() {
    return (
      <div className='fallback-spinner'>
        <img className="fallback-logo" src={IMAGE.INON_LOGO} alt="logo"/>
        <div className='loading'>
          <div className='effect-1 effects'/>
          <div className='effect-2 effects'/>
          <div className='effect-3 effects'/>
        </div>
      </div>
    )
  }
}

export default FallbackSpinner
