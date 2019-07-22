import * as React from 'react'
import { useState } from 'react'
import { InputBox } from './styled.jsx'

const onInput = e => {
    e.preventDefault()
    return e.currentTarget.value 
}

const Input = props => {
    const {
        placeholder,
        value,
        type,
        maxLength,
        minLength,
        onChange,
        ...remainingHandlers
    } = props
    const [ curValue, setValue ] = useState(value || '')

    return (
        <InputBox
            placeholder={placeholder}
            value={onChange ? value : curValue}
            onChange={e => onChange ? onChange(e) : setValue(onInput(e))}
            type={type || 'text'}
            maxLength={maxLength}
            minLength={minLength}
            {...remainingHandlers}
        />
    )
}

export { Input }