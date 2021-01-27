import React, { useEffect, useRef, Fragment } from 'react'
import { useField } from '@unform/core'
import { Input, Error } from './styles'
import 'react-router-dom'

export default function InputUnform({ name, type, ...rest }) {

  const inputRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type === 'file' ? 'files[0]' : 'value',
      clearValue(ref) {
        ref.value = ''
      }
    })
  },
    [fieldName, registerField, type])

  return (

    // INPUT DE TODO SITE

    <Fragment>

      <Input
        type={type}
        withError={!!error}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {
        !!error &&
        <Error>{error}</Error>
      }
    </Fragment>
  )
}