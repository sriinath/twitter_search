import * as React from 'react'
import { TextElement } from './styled.jsx'

const Text = props => {
    const {
        text,
        isHeading,
        isLink
    } = props
    
    return (
        isHeading ? <TextElement as='h2' {...props}>{text}</TextElement>
        : isLink ? <TextElement as='a' {...props}>{text}</TextElement>
        : <TextElement {...props}>{text}</TextElement>
    )
}

export { Text }