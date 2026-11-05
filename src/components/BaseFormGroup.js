import {Field} from 'formik'
import React from 'react'
import {FormattedMessage} from 'react-intl'
import {FormGroup, Input, Label} from 'reactstrap'
import {getPropObject} from '../configs/app-configs'

const BaseFormGroup = ({
  fieldName,
  errors,
  touched,
  messageId,
  type,
  className,
  maxLength,
  disabled,
  onChange,
  onBlur,
  onKeyDown,
  isShowErrorMessage: _isShowErrorMessage = true,
  isRequired: _isRequired = true,
  ...rest
}) => {
  const getStepDecimals = () => {
    if ('number' !== type || undefined === rest.step || null === rest.step || 'any' === rest.step) {
      return null
    }
    const stepStr = rest.step.toString()
    const parts = stepStr.split('.')
    return 1 < parts.length ? parts[1].length : 0
  }
  const handleKeyDown = (e) => {
    const maxDecimals = getStepDecimals()
    if ('number' === type && null !== maxDecimals) {
      if (['e', 'E', '+'].includes(e.key) || ('-' === e.key && 0 <= Number(rest.min))) {
        e.preventDefault()
        return
      }
      if (0 === maxDecimals) {
        if (['.', ','].includes(e.key)) {
          e.preventDefault()
          return
        }
      } else {
        const val = e.target.value || ''
        if (['.', ','].includes(e.key) && (val.includes('.') || val.includes(','))) {
          e.preventDefault()
          return
        }
        if (val.includes('.')) {
          const parts = val.split('.')
          if (
            parts[1] &&
            parts[1].length >= maxDecimals &&
            e.target.selectionStart > val.indexOf('.')
          ) {
            if (!['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
              e.preventDefault()
              return
            }
          }
        }
      }
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }
  const handleOnBlur = (e, form) => {
    form.handleBlur(e)
    let { value } = e.target
    value = value.trim()
    form.setFieldValue(fieldName, value)
    if (onBlur) {
      onBlur(e, form)
    }
  }
  const handleChange = (e, form) => {
    const maxDecimals = getStepDecimals()
    if ('number' === type && null !== maxDecimals) {
      let raw = (e.target.value || '').replace(',', '.')
      if (0 === maxDecimals) {
        const integerPart = raw.split('.')[0]
        const sanitized = integerPart.replace(/\D/g, '')
        if (sanitized !== e.target.value) {
          form.setFieldValue(fieldName, sanitized)
          e.target.value = sanitized
        } else {
          form.handleChange(e)
        }
      } else {
        const match = raw.match(new RegExp('^\\d*(\\.\\d{0,' + maxDecimals + '})?'))
        const sanitized = match ? match[0] : ''
        if (sanitized !== e.target.value) {
          form.setFieldValue(fieldName, sanitized)
          e.target.value = sanitized
        } else {
          form.handleChange(e)
        }
      }
    } else {
      form.handleChange(e)
    }
    if (onChange) {
      onChange(e, form)
    }
  }
  return (
    <FormGroup className={`form-label-group position-relative ${className}`}>
      <FormattedMessage id={messageId}>
        {(msg) => (
          <React.Fragment>
            <Field name={fieldName}>
              {({ field, form }) => (
                <Input
                  className={`form-control ${
                    _isRequired &&
                    getPropObject(form.errors, fieldName) &&
                    getPropObject(form.touched, fieldName) &&
                    'is-invalid'
                  }`}
                  {...field}
                  type={type}
                  disabled={disabled}
                  maxLength={maxLength}
                  value={field.value}
                  placeholder={msg}
                  onBlur={(e) => handleOnBlur(e, form)}
                  onChange={(e) => handleChange(e, form)}
                  onKeyDown={handleKeyDown}
                  {...rest}
                />
              )}
            </Field>
            {_isRequired &&
            _isShowErrorMessage &&
            getPropObject(errors, fieldName) &&
            getPropObject(touched, fieldName) ? (
              <div className='text-danger'>{getPropObject(errors, fieldName)}</div>
            ) : null}
            <Label>{msg}</Label>
          </React.Fragment>
        )}
      </FormattedMessage>
    </FormGroup>
  )
}

export default BaseFormGroup
