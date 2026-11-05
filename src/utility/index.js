import React from 'react'
import { AlertTriangle, Check } from 'react-feather'
import { toast } from 'react-toastify'

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const trimValue = (value) => {
  return value ? value.trim() : ''
}
export const bytesToMb = (bytes) => {
  return Math.round(bytes / Math.pow(1024, 2), 2);
}

export const trimObjectValues = (object, excludeKeys = []) => {
  if (!object) {
    return
  }
  Object.keys(object).forEach((key) => {
    if (excludeKeys.indexOf(key) >= 0) {
      return
    }
    switch (typeof object[key]) {
      case 'string':
        object[key] = trimValue(object[key])
        break
      case 'object':
        trimObjectValues(object[key])
    }
  })
  return object
}

export const numberFormat = (value) => {
  return Intl.NumberFormat().format(value)
}

export const toastError = (message) => {
  toast.error(
    <div className='d-flex align-items-center'>
      <div className='col-1 p-0'>
        <AlertTriangle size={24} />
      </div>
      <p className='mx-1 my-0'>{message}</p>
    </div>
  )
}

export const toastSuccess = (message) => {
  toast.success(
    <div className='d-flex align-items-center'>
      <div className='col-1 p-0'>
        <Check size={24} />
      </div>
      <p className='mx-1 my-0'>{message}</p>
    </div>
  )
}
