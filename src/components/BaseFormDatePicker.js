import { getPropObject } from '../configs/app-configs'
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
  placeHolder,
  isRequired: _isRequired = true,
  isAutoSetFieldValue = true,
}) => {
  const defaultOptions = {
    dateFormat: 'd/m/Y',
  }
  const intl = useIntl()
  return (
    <FormGroup>
      <Field name={fieldName}>
        {({ field, form }) => (
          <DatePicker
            className={`${
              _isRequired && getPropObject(errors, fieldName) && getPropObject(touched, fieldName)
                ? 'is-invalid'
                : ''
            } ${className || ''}`.trim()}
            placeholder={
              placeHolder
                ? placeHolder
                : intl.formatMessage({
                    id: messageId,
                  })
            }
            label={
              messageId
                ? intl.formatMessage({
                    id: messageId,
                  })
                : ''
            }
            isShowErrorMessage={isShowErrorMessage}
            fieldName={fieldName}
            notRequired={!_isRequired}
            errors={errors}
            disabled={disabled}
            touched={touched}
            value={field.value}
            options={options || defaultOptions}
            onChange={(date) => {
              if (true == isAutoSetFieldValue) {
                form.setFieldValue(fieldName, date[0])
              }
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
