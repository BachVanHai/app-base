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
  value,
  isRequired: _isRequired = true,
  isAsync,
  disabled,
  onChange,
  loadOptions,
  type,
  isShowErrorMessage: _isShowErrorMessage = true,
  defaultOptions,
  marginLabel,
  placeholder,
  isMulti,
  isClearable,
  maxMenuHeight = 200,
  ...rest
}) => {
  const intl = useIntl()
  return (
    <Field name={fieldName}>
      {({ field, form }) => {
        let resolvedValue
        if (true === isMulti) {
          resolvedValue = void 0 !== value ? value : field.value
        } else if (
          void 0 !== value &&
          null !== value &&
          'object' === typeof value &&
          !Array.isArray(value)
        ) {
          resolvedValue = value
        } else {
          const targetVal = void 0 !== value && null !== value && '' !== value ? value : field.value
          resolvedValue = options
            ? options.find(
                (item) =>
                  targetVal === item.value ||
                  (void 0 !== targetVal &&
                    null !== targetVal &&
                    String(targetVal) === String(item.value))
              )
            : undefined
        }
        return (
          <Select
            placeholder={
              placeholder ||
              intl.formatMessage({
                id: messageId,
              })
            }
            label={intl.formatMessage({
              id: messageId,
            })}
            className={`${
              _isRequired &&
              getPropObject(errors, fieldName) &&
              getPropObject(touched, fieldName) &&
              'is-invalid'
            }`}
            type={type}
            isShowErrorMessage={_isShowErrorMessage}
            classNamePrefix='Select'
            fieldName={fieldName}
            required={_isRequired}
            value={resolvedValue}
            defaultValue={defaultValue}
            disabled={disabled}
            errors={errors}
            isAsync={isAsync}
            loadOptions={loadOptions}
            defaultOptions={defaultOptions}
            touched={touched}
            options={options}
            isMulti={isMulti}
            isClearable={isClearable}
            maxMenuHeight={maxMenuHeight}
            onChange={(e) => {
              if (isMulti) {
                form.setFieldValue(fieldName, e ? e.map((item) => item.value).join(',') : '')
              } else {
                form.setFieldValue(fieldName, e ? e.value : '')
              }
              if (onChange) {
                onChange(e, form)
              }
            }}
            marginLabel={marginLabel}
            {...rest}
          />
        )
      }}
    </Field>
  )
}

export default BaseFormGroupSelect
