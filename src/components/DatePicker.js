import React, {useEffect, useRef} from 'react'
import flatpickr from 'flatpickr'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/themes/light.css'
import 'flatpickr/dist/l10n/vn.js'
import '../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import {FormGroup, Label} from 'reactstrap'
import {getPropObject} from '../configs/app-configs'
import {useIntl} from "react-intl";

const DatePicker = (props) => {
  const intl = useIntl()

  return (
    <FormGroup className='form-label-group position-relative'>
      <Flatpickr
        options={
          {
            disableMobile: true,
            allowInput: false,
            locale: intl.locale === 'vi' ? flatpickr.l10ns.vn : '',
            ...props.options
          }
        }
        disabled={props.disabled}
        placeholder={props.placeholder}
        data-enable-time
        className={`form-control position-relative bg-white flatpickr-input ${props.className}`}
        value={props.value}
        onClose={() => props.onClose && props.onClose()}
        onChange={date => props.onChange && props.onChange(date)}
      />
      <Label>{props.placeholder}</Label>
      {props.errors &&
      props.touched && props.isShowErrorMessage &&
      getPropObject(props.errors, props.fieldName) &&
      getPropObject(props.touched, props.fieldName) ? (
        <div className='text-danger'>{getPropObject(props.errors, props.fieldName)}</div>
      ) : null}
    </FormGroup>
  )
}

export default DatePicker
