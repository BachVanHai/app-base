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
                         isShowErrorMessage = true,
  isRequired = true
}) => {
  const onBlur = (e, form) => {
    form.handleBlur(e)
    let {value} = e.target
    value = value.trim()
    form.setFieldValue(fieldName, value)
  }

  const handleChange = (e, form) => {
    form.handleChange(e)
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
              {({field, form}) => (
                <Input
                  className={`form-control ${
                    isRequired &&
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
                  onBlur={(e) => onBlur(e, form)}
                  onChange={(e) => handleChange(e, form)}
                />
              )}
            </Field>

            {isRequired && isShowErrorMessage &&
            getPropObject(errors, fieldName) &&
            getPropObject(touched, fieldName) ? (
              <div className='text-danger'>
                {getPropObject(errors, fieldName)}
              </div>
            ) : null}
            <Label>{msg}</Label>
          </React.Fragment>
        )}
      </FormattedMessage>
    </FormGroup>
  )
}

export default BaseFormGroup
