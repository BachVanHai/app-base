import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { toastSuccess } from '../utility'
import { HIDE_ERROR_MODAL } from '../redux/actions/ui'
import { Clipboard, Info } from 'react-feather'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import React from 'react'

const GlobalErrorModal = () => {
  const { isOpen, message, errorCode } = useSelector((state) => state.ui.errorModal)
  const dispatch = useDispatch()
  const intl = useIntl()
  const handleClose = () => {
    dispatch({
      type: HIDE_ERROR_MODAL,
    })
  }
  return (
    <Modal
      isOpen={isOpen}
      toggle={handleClose}
      className='modal-dialog-centered mx-2 mx-md-auto'
      centered={true}
    >
      <ModalHeader toggle={handleClose} className='border-bottom-0 pb-0'>
        <div
          style={{
            fontWeight: 'bold',
            color: '#338955',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
          }}
        >
          <Info size={22} color='#338955' className='flex-shrink-0' />
          Thông báo
        </div>
      </ModalHeader>
      <ModalBody className='text-center p-2 pt-3'>
        <div
          style={{
            whiteSpace: 'pre-line',
            wordBreak: 'break-word',
            marginBottom: null !== errorCode ? '24px' : '0',
            fontSize: '14px',
            color: '#333',
            lineHeight: '1.6',
          }}
        >
          {message}
        </div>
        {null !== errorCode ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                color: '#6c757d',
                fontWeight: '500',
              }}
            >
              Mã tra cứu:
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#f8f9fa',
                padding: '10px 14px',
                borderRadius: '0.4285rem',
                border: '1px solid #e9ecef',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '14px',
                  wordBreak: 'break-all',
                  color: '#495057',
                  textAlign: 'left',
                  letterSpacing: '0.5px',
                }}
              >
                {errorCode}
              </span>
              <div
                className='cursor-pointer flex-shrink-0 d-flex align-items-center justify-content-center'
                title='Sao chép mã tra cứu'
                style={{
                  background: '#e2e8f0',
                  borderRadius: '6px',
                  color: '#495057',
                }}
                onClick={() => {
                  navigator.clipboard.writeText(String(errorCode))
                  toastSuccess('Đã sao chép mã tra cứu')
                }}
              >
                <Clipboard size={14} />
              </div>
            </div>
          </div>
        ) : null}
      </ModalBody>
      <ModalFooter className='justify-content-center border-top-0 pb-2'>
        <Button color='primary' onClick={handleClose}>
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default GlobalErrorModal
