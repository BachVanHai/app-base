import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import moment from 'moment'
import { getMyNotifications, mergeSseNotification, updateAllNotifications, updateNotification } from '../../../redux/actions/notification'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { FormattedMessage } from 'react-intl'
import { EventSourceClient } from '../../../utility/HttpClient'
import { Bell } from 'react-feather'
import { Badge, Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Media, Modal, ModalBody, ModalFooter, ModalHeader, UncontrolledButtonDropdown } from 'reactstrap'
import { API_SSE_SUBSCRIBE_NOTIFICATION } from '../../../configs/app-configs'
import React from 'react'

export const MediaCustom = styled.div`
  display: flex;
  justify-content: space-between;

  .media {
    .notification-icon {
      border-radius: 50%;
      background-color: rgb(237 237 237);

      img {
        width: 50px;
      }
    }

    .media-body {
      width: 150px;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .media-unread {
    color: black;
    font-weight: bold;
  }
`

export const CustomImage = styled.img`
  width: 20px;
  height: 20px;
`

export const CustomDropdown = styled.div`

  .dropdown-item {
    width: 100% !important;
  }

  .dropleft {
    .dropdown-menu::before {
      display: none;
    }
  }

`

export const Notifications = ({
  notifications,
  openModal,
  openDeleteAllModal,
  onClickUpdateAllNotifications,
}) => {
  const dispatch = useDispatch()
  const onClickOpenNotification = async (notification) => {
    openModal(notification)
    dispatch(updateNotification(createNotificationRequest(notification, true)))
  }
  const onClickUpdateNotification = (notification, status) => {
    dispatch(updateNotification(createNotificationRequest(notification, status)))
  }
  const createNotificationRequest = (notification, status) => {
    const newNotification = {}
    newNotification.id = notification.id
    newNotification.notificationTemplateHisId = notification.notificationTemplateHisId
    newNotification.templateId = notification.templateId
    if (status === 'DELETE') {
      newNotification.read = true
      newNotification.deleted = true
    } else {
      newNotification.read = status
      newNotification.deleted = false
    }
    return newNotification
  }
  const getNotificationType = (item) => {
    if (item['notificationType'] === 'SYSTEM') {
      return (
        <img
          src='https://sit2.bmktech.vn/resources/images/system-notification.png'
          alt='System notification'
        />
      )
    } else if (item['notificationType'] === 'USER') {
      return (
        <img
          src='https://sit2.bmktech.vn/resources/images/user-notification.png'
          alt='User notification'
        />
      )
    } else
      return (
        <img
          src='https://sit2.bmktech.vn/resources/images/promotion-notification.png'
          alt='Promotion notification'
        />
      )
  }
  const notificationsValid = useMemo(
    () =>
      notifications
        .filter((item) => item.deleted === false)
        .sort((a, b) => new Date(b.sendDate) - new Date(a.sendDate)),
    [notifications]
  )
  return (
    <React.Fragment>
      <li className='dropdown-menu-header d-flex justify-content-between align-items-center'>
        <div className='dropdown-header mt-0 text-left'>
          <span className='notification-title'>
            <FormattedMessage id='menu.notification' />
          </span>
          <span>({notificationsValid.length})</span>
        </div>
        <div className='cursor-pointer' onClick={() => onClickUpdateAllNotifications(true)}>
          <FormattedMessage id='menu.readAll' />
        </div>
      </li>
      <PerfectScrollbar
        className='media-list overflow-hidden position-relative'
        options={{
          wheelPropagation: false,
        }}
      >
        {notificationsValid.length > 0 ? (
          notificationsValid.map((item) => (
            <MediaCustom key={item.id}>
              <Media className={item.read === true ? 'media-read' : 'media-unread'}>
                <Media left={true}>
                  <div className='notification-icon'>{getNotificationType(item)}</div>
                </Media>
                <Media onClick={() => onClickOpenNotification(item)} body={true}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.shortContent,
                    }}
                  />
                  <small className='mt-1'>
                    <time dateTime={item.sendDate}>
                      {moment().diff(moment(item.sendDate), 'days') >= 1
                        ? moment(item.sendDate).format('DD/MM/YYYY')
                        : moment(item.sendDate).fromNow()}
                    </time>
                  </small>
                </Media>
                <Media right={true} className='cursor-pointer'>
                  <CustomDropdown>
                    <UncontrolledButtonDropdown direction='left'>
                      <DropdownToggle tag='span'>
                        <div className='position-relative'>
                          <CustomImage
                            src='https://sit2.bmktech.vn/resources/images/ellipsis-v-solid.png'
                            alt=''
                          />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu>
                        {item.read ? (
                          <DropdownItem onClick={() => onClickUpdateNotification(item, false)}>
                            <FormattedMessage id='navbar.notifications.markAsUnRead' />
                          </DropdownItem>
                        ) : (
                          <DropdownItem onClick={() => onClickUpdateNotification(item, true)}>
                            <FormattedMessage id='navbar.notifications.markAsRead' />
                          </DropdownItem>
                        )}
                        <DropdownItem onClick={() => onClickUpdateNotification(item, 'DELETE')}>
                          <FormattedMessage id='navbar.notifications.delete' />
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </CustomDropdown>
                </Media>
              </Media>
            </MediaCustom>
          ))
        ) : (
          <Media className='justify-content-center font-weight-bold'>
            <FormattedMessage id='navbar.notifications.noNewNotifications' />
          </Media>
        )}
      </PerfectScrollbar>
      {notificationsValid.length > 0 && (
        <li className='dropdown-menu-footer' onClick={() => openDeleteAllModal()}>
          <DropdownItem tag='a' className='p-1 text-center'>
            <span className='align-middle font-weight-bold'>
              <FormattedMessage id='menu.deleteAll' />
            </span>
          </DropdownItem>
        </li>
      )}
    </React.Fragment>
  )
}

let _sseController = null

let _sseUserId = null

let _sseRefCount = 0

let _sseReconnectTimer = null

const _sseToastedIds = new Map()

export const SSE_TOAST_DEDUPE_MS = 30000

export const SSE_RECONNECT_MS = 5000

export const SSE_RETRY_DELAY_MS = 3000

export const parseSseNotificationPayload = (raw) => {
  if (!raw || '' === raw) {
    return null
  }
  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
    const dto = parsed && parsed.notification ? parsed.notification : parsed
    if (!dto || typeof dto !== 'object') {
      return null
    }
    return dto
  } catch (e) {
    return null
  }
}

export const shouldShowSseToast = (id) => {
  if (!id) {
    return true
  }
  const now = Date.now()
  const lastShown = _sseToastedIds.get(id)
  if (lastShown && now - lastShown < SSE_TOAST_DEDUPE_MS) {
    return false
  }
  _sseToastedIds.set(id, now)
  for (const [key, shownAt] of _sseToastedIds) {
    if (now - shownAt >= SSE_TOAST_DEDUPE_MS) {
      _sseToastedIds.delete(key)
    }
  }
  return true
}

export const stripHtmlForToast = (text) => {
  if (!text) {
    return ''
  }
  return String(text)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export const scheduleSseReconnect = (connectFn) => {
  if (_sseReconnectTimer) {
    clearTimeout(_sseReconnectTimer)
  }
  _sseReconnectTimer = setTimeout(() => {
    _sseReconnectTimer = null
    if (_sseRefCount > 0 && !_sseController) {
      connectFn()
    }
  }, SSE_RECONNECT_MS)
}

export const checkNewNotifications = (newNotifications) => {
  if (newNotifications.length <= 0) {
    return
  }
  for (const raw of newNotifications) {
    if (!raw || '' === raw) {
      continue
    }
    let payload = raw
    if (typeof raw === 'string') {
      payload = parseSseNotificationPayload(raw)
      if (!payload) {
        continue
      }
    }
    if (payload.deleted === true || payload.read === true) {
      continue
    }
    if (!shouldShowSseToast(payload.id)) {
      continue
    }
    let message = 'Bạn đã nhận được một thông báo mới!'
    if (payload.shortContent) {
      message = stripHtmlForToast(payload.shortContent)
    } else if (payload.title) {
      message = stripHtmlForToast(payload.title)
    }
    toast.primaryInfo(message || 'Bạn đã nhận được một thông báo mới!')
  }
}

const Bells = () => {
  const dispatch = useDispatch()
  const { notifications } = useSelector((state) => state.notifications)
  const authToken = useSelector((state) => state.auth.guest?.authToken || state.auth.authToken)
  const userId = useSelector((state) => state.auth.guest?.user?.id || state.auth.user?.id)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)
  const [numberNewNotification, setNumberNewNotification] = useState(0)
  const [notification, setNotification] = useState(null)
  const [centeredModal, setCenteredModal] = useState(false)
  useEffect(() => {
    const newNotifications = notifications.filter(
      (item) => item.read === false && item.deleted === false
    )
    setNumberNewNotification(newNotifications.length)
  }, [notifications])
  useEffect(() => {
    _sseRefCount++
    const cleanupCountOnly = () => {
      _sseRefCount--
    }
    const cleanupWithTimeout = () => {
      _sseRefCount--
      if (_sseReconnectTimer) {
        clearTimeout(_sseReconnectTimer)
        _sseReconnectTimer = null
      }
      setTimeout(() => {
        if (0 === _sseRefCount && _sseController) {
          _sseController.abort()
          _sseController = null
          _sseUserId = null
        }
      }, 100)
    }
    if (!userId || !authToken) {
      if (_sseController) {
        _sseController.abort()
        _sseController = null
        _sseUserId = null
      }
      return cleanupCountOnly
    }
    if (_sseController && _sseUserId === userId) {
      return cleanupWithTimeout
    }
    if (_sseController) {
      _sseController.abort()
      _sseController = null
    }
    dispatch(getMyNotifications())
    const connectSse = () => {
      if (_sseController || !userId || !authToken) {
        return
      }
      const controller = new AbortController()
      _sseController = controller
      _sseUserId = userId
      const ssePromise = EventSourceClient.connect(`${API_SSE_SUBSCRIBE_NOTIFICATION}/${userId}`, {
        signal: controller.signal,
        openWhenHidden: true,
        onmessage: (event) => {
          if (event.event && event.event !== 'notification') {
            return
          }
          const notification = parseSseNotificationPayload(event.data)
          if (!notification) {
            return
          }
          dispatch(mergeSseNotification(notification))
          checkNewNotifications([notification])
        },
        onerror: (err) => {
          if (err && err.message && err.message.includes('SSE open failed')) {
            console.info('SSE notification info:', err.message)
            return SSE_RETRY_DELAY_MS
          }
          console.error('SSE notification error:', err)
          return SSE_RETRY_DELAY_MS
        },
      })
      if (ssePromise === null) {
        controller.abort()
        _sseController = null
        _sseUserId = null
        scheduleSseReconnect(connectSse)
        return
      }
      ssePromise.catch((err) => {
        if (err && 'AbortError' === err.name) {
          return
        }
        _sseController = null
        _sseUserId = null
        scheduleSseReconnect(connectSse)
      })
    }
    connectSse()
    return cleanupWithTimeout
  }, [userId, authToken, dispatch])
  const toggleDropdown = () => {
    if (!notificationModal) {
      setDropdownOpen(!dropdownOpen)
    }
  }
  const openModal = (notification) => {
    setNotificationModal(true)
    setNotification(notification)
  }
  const openDeleteAllModal = () => {
    setCenteredModal(!centeredModal)
  }
  const onClickUpdateAllNotifications = (status) => {
    let newNotificationsRequest
    if (status === 'DELETE') {
      newNotificationsRequest = notifications.map((item) => {
        const notification = {}
        notification.id = item.id
        notification.deleted = true
        notification.read = true
        notification.notificationTemplateHisId = item.notificationTemplateHisId
        notification.templateId = item.templateId
        return notification
      })
    } else {
      newNotificationsRequest = notifications.map((item) => {
        const notification = {}
        notification.id = item.id
        notification.read = status
        notification.deleted = false
        notification.notificationTemplateHisId = item.notificationTemplateHisId
        notification.templateId = item.templateId
        return notification
      })
    }
    dispatch(updateAllNotifications(newNotificationsRequest, status))
  }
  return (
    <React.Fragment>
      <ButtonDropdown
        isOpen={dropdownOpen}
        toggle={toggleDropdown}
        tag='li'
        className='dropdown-notification nav-item'
      >
        <DropdownToggle tag='a' className='nav-link nav-link-label'>
          <Bell className='text-primary' size={22} />
          <Badge pill={true} color='primary' className='badge-up'>
            {numberNewNotification}
          </Badge>
        </DropdownToggle>
        <DropdownMenu tag='ul' right={true} className='dropdown-menu-media'>
          <Notifications
            notifications={notifications}
            openModal={openModal}
            openDeleteAllModal={openDeleteAllModal}
            onClickUpdateAllNotifications={onClickUpdateAllNotifications}
          />
        </DropdownMenu>
      </ButtonDropdown>
      {notification && (
        <Modal
          className='modal-lg modal-dialog-centered custom-modal-notification'
          isOpen={notificationModal}
        >
          <ModalHeader toggle={() => setNotificationModal(!notificationModal)}>
            <div
              className='font-weight-bold'
              dangerouslySetInnerHTML={{
                __html: notification.title,
              }}
            />
          </ModalHeader>
          <ModalBody className='overflow-auto'>
            <div
              dangerouslySetInnerHTML={{
                __html: notification.content,
              }}
            />
          </ModalBody>
        </Modal>
      )}
      <Modal
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className='modal-dialog-centered'
      >
        <ModalBody>
          <FormattedMessage id='menu.confirmDeleteAll' />
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              onClickUpdateAllNotifications('DELETE')
              setCenteredModal(!centeredModal)
            }}
          >
            <FormattedMessage id='common.ok' />
          </Button>{' '}
          <Button onClick={() => setCenteredModal(!centeredModal)}>
            <FormattedMessage id='common.cancel' />
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default Bells
