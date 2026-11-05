import React, { useCallback, useEffect, useState } from 'react'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/async'
import CreatableSelect from 'react-select/creatable'
import { FormGroup, Label } from 'reactstrap'
import classnames from 'classnames'
import { getPropObject } from '../configs/app-configs'

const Select = (props) => {
  const [inputValue, setInputValue] = useState(props.value)
  const [isFocused, setIsFocused] = useState(false)
  useEffect(() => {
    setInputValue(props.value)
  }, [props.value])
  const onChange = (e, actions) => {
    if (props.onChange) {
      props.onChange(e, actions)
    }
    if (props.isMulti) {
      setInputValue(e ? e.map((item) => item.value).join() : '')
    } else {
      setInputValue(e ? e.value : '')
    }
    setIsFocused(false)
  }
  const onFocus = (e) => {
    if (props.onFocus) {
      props.onFocus(e)
    }
    setIsFocused(true)
  }
  const onBlur = (e) => {
    if (props.onBlur) {
      props.onBlur(e)
    }
    setIsFocused(false)
  }
  const SelectComponent = useCallback(
    (componentProps) => {
      const newProps = {
        ...componentProps,
      }
      if (props.isMulti) {
        let values = props.value || ''
        if (typeof props.value !== 'string') {
          values = ''
        }
        newProps.value = props.options.filter((item) =>
          values.split(',').includes(String(item.value))
        )
      }
      switch (props.type) {
        case 'creatable':
          return <CreatableSelect {...newProps} />
        case 'async':
          return <AsyncSelect {...newProps} />
        default:
          return <ReactSelect {...newProps} />
      }
    },
    [props.options, props.value]
  )
  return (
    <FormGroup className='form-label-group position-relative'>
      <SelectComponent
        {...props}
        maxMenuHeight={void 0 !== props.maxMenuHeight ? props.maxMenuHeight : 200}
        isDisabled={props.disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#338955',
          },
        })}
      />
      {props.required && props.isShowErrorMessage ? (
        getPropObject(props.errors, props.fieldName) &&
        getPropObject(props.touched, props.fieldName) ? (
          <div className='text-danger'>{getPropObject(props.errors, props.fieldName)}</div>
        ) : null
      ) : (
        ''
      )}
      <input className='d-none' placeholder={props.placeholder} value={inputValue} />
      {inputValue ? (
        <Label
          className={classnames(
            {
              'text-primary': isFocused,
            },
            props.marginLabel
          )}
        >
          {props.label || props.placeholder}
        </Label>
      ) : (
        ''
      )}
    </FormGroup>
  )
}

export default Select
