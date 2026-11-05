import React, {useEffect, useRef} from 'react'
import flatpickr from 'flatpickr'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/l10n/vn.js'
import {FormGroup, Label} from 'reactstrap'
import {getPropObject} from '../configs/app-configs'
import {useIntl} from "react-intl";

// legacy-bundle-final shipped flatpickr's Vietnamese locale with months 11 and 12 spelled out
// (stock 4.6.6 has "Tháng 11" / "Tháng 12"); keep that behaviour.
flatpickr.l10ns.vn.months.longhand[10] = 'Tháng mười một'
flatpickr.l10ns.vn.months.longhand[11] = 'Tháng mười hai'

const DatePicker = (props) => {
  const intl = useIntl()
  const fpRef = useRef(null)
  useEffect(() => {
    if (fpRef.current && fpRef.current.flatpickr) {
      const fp = fpRef.current.flatpickr
      if (fp.altInput) {
        fp.altInput.disabled = !!props.disabled
        if (props.disabled) {
          fp.altInput.setAttribute('readonly', 'readonly')
          fp.altInput.classList.remove('bg-white')
        } else {
          if (fp.config && fp.config.allowInput) {
            fp.altInput.removeAttribute('readonly')
          }
          fp.altInput.classList.add('bg-white')
        }
      }
      if (fp._input) {
        fp._input.disabled = !!props.disabled
      }
    }
  }, [props.disabled])
  return (
    <FormGroup className='form-label-group position-relative'>
      <Flatpickr
        ref={fpRef}
        options={{
          disableMobile: true,
          allowInput: !props.disabled && true,
          locale: intl.locale === 'vi' ? flatpickr.l10ns.vn : '',
          ...props.options,
          ...(props.disabled
            ? {
                allowInput: false,
                clickOpens: false,
              }
            : {}),
        }}
        disabled={props.disabled}
        placeholder={props.placeholder}
        data-enable-time={true}
        className={`form-control position-relative ${
          !props.disabled ? 'bg-white' : ''
        } flatpickr-input ${props.className || ''}`
          .replace(/\s+/g, ' ')
          .trim()}
        value={props.value}
        onClose={(date) => {
          props.onChange && props.onChange(date)
          return props.onClose && props.onClose()
        }}
        onChange={(date) => props.onChange && props.onChange(date)}
      />
      <Label>{props.label}</Label>
      {props.errors &&
      props.touched &&
      props.isShowErrorMessage &&
      getPropObject(props.errors, props.fieldName) &&
      getPropObject(props.touched, props.fieldName) ? (
        <div className='text-danger'>{getPropObject(props.errors, props.fieldName)}</div>
      ) : null}
    </FormGroup>
  )
}

export default DatePicker
