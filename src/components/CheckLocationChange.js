import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAppId} from "../redux/actions/customizer";
import {AppId} from "../index";

export const CheckLocationChange = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { appId } = useSelector((state) => state.customizer)
  const { authToken } = useSelector((state) => state.auth)
  useEffect(() => {
    let id
    if (window.location.href.includes('/app/')) {
      id = AppId.APP_NO1
    } else if (window.location.href.includes('/insurance/')) {
      id = AppId.INSURANCE_APP
    } else if (window.location.href.includes('/supplement/')) {
      id = AppId.SUPPLEMENT_APP
    } else {
      id = AppId.ELITE_APP
    }
    if (appId !== id) {
      dispatch(setAppId(id))
    }
    if ([AppId.APP_NO1, AppId.SUPPLEMENT_APP, AppId.INSURANCE_APP].indexOf(id) >= 0 && !authToken) {
      history.push('/')
    }
  }, [history.location.pathname])
  return <span />
}

export default CheckLocationChange
