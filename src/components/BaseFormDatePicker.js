import {Field} from 'formik'
import React from 'react'
import {useIntl} from 'react-intl'
import {FormGroup} from 'reactstrap'
import DatePicker from './DatePicker'

const BaseFormDatePicker = ({
                              fieldName,
                              errors,
                              touched,
                              messageId,
                              className,
                              options,
                              onChange,
                              disabled,
                              isShowErrorMessage,
                              isRequired = true
                            }) => {
  const defaultOptions = {dateFormat: 'm/d/Y'}
  const intl = useIntl()

  return (
    <FormGroup>
      <Field name={fieldName}>
        {({field, form}) => (
          <DatePicker
            className={`form-control position-relative ${!disabled ? 'bg-white' : ''} ${
              isRequired &&
              errors[fieldName] &&
              touched[fieldName] &&
              'is-invalid'
            } ${className}`}
            placeholder={messageId ? intl.formatMessage({
              id: messageId
            }) : ''}
            isShowErrorMessage={isShowErrorMessage}
            fieldName={fieldName}
            notRequired={!isRequired}
            errors={errors}
            disabled={disabled}
            touched={touched}
            value={field.value}
            options={options || defaultOptions}
            onChange={(date) => {
              form.setFieldValue(fieldName, date[0])
              if (onChange) {
                onChange(date, form)
              }
            }}
          />
        )}
      </Field>
    </FormGroup>
  )
}

export default BaseFormDatePicker
