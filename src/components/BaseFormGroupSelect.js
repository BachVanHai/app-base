import {Field} from 'formik'
import React from 'react'
import {useIntl} from 'react-intl'
import {getPropObject} from '../configs/app-configs'
import Select from './Select'

const BaseFormGroupSelect = ({
                               fieldName,
                               errors,
                               touched,
                               messageId,
                               options,
                               defaultValue,
                               isRequired = true,
                               isAsync,
                               disabled,
                               onChange,
                               loadOptions,
                               type,
                               isShowErrorMessage = true,
                               defaultOptions
                             }) => {
  const intl = useIntl()

  return (
    <Field name={fieldName}>
      {({field, form}) => (
        <Select
          placeholder={intl.formatMessage({
            id: messageId
          })}
          className={`${
            isRequired &&
            getPropObject(errors, fieldName) &&
            getPropObject(touched, fieldName) &&
            'is-invalid'
          }`}
          type={type}
          isShowErrorMessage={isShowErrorMessage}
          classNamePrefix='Select'
          fieldName={fieldName}
          required={isRequired}
          value={options.find(item => item.value === field.value)}
          defaultValue={defaultValue}
          disabled={disabled}
          errors={errors}
          isAsync={isAsync}
          loadOptions={loadOptions}
          defaultOptions={defaultOptions}
          touched={touched}
          options={options}
          onChange={(e) => {
            form.setFieldValue(fieldName, e.value)
            if (onChange) {
              onChange(e, form)
            }
          }}
        />
      )}
    </Field>
  )
}

export default BaseFormGroupSelect
