import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeIsGuest} from "../../redux/actions/auth";

const AppSelection = ({ isLogin }) => {
  const { isGuest } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const onClickChangeAppType = (value) => {
    dispatch(changeIsGuest(value))
  }
  return <div className='text-center mt-2 mb-3' />
}

export default AppSelection
