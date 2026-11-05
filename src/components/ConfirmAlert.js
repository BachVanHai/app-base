import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { hideConfirmAlert } from '../redux/actions/ui/Index'
const ConfirmAlert = () => {
  const {
    title,
    isShow,
    content,
    onConfirm,
    onCancel,
    confirmBtnText,
    cancelBtnText,
    ...otherConfigs
  } = useSelector((state) => state.ui.confirmAlert)

  const dispatch = useDispatch()
  const intl = useIntl()


  const onClickConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
    dispatch(hideConfirmAlert())
  }


  const onClickCancel = () => {
    if (onCancel) {
      onCancel()
    }
    dispatch(hideConfirmAlert())
  }


  return (
    <SweetAlert
      title={title}
      show={isShow}
      showCancel
      reverseButtons
      btnSize='md'
      cancelBtnBsStyle='secondary'
      confirmBtnText={confirmBtnText || intl.formatMessage({id : 'common.ok'})}
      cancelBtnText={cancelBtnText || intl.formatMessage({id : 'common.cancel'})}
      onConfirm={onClickConfirm}
      onCancel={onClickCancel}
      {...otherConfigs}
    >
      {content}
    </SweetAlert>
  )
}

export default ConfirmAlert
