import * as React from 'react'
import {
    Text,
    Icon
} from '../../atom'
import { IconWithTextWrapper } from './styled.jsx'

const IconWithText = props => {
    const {
        iconPosition,
        text,
        isHeading,
        isTitle,
        ...remainingProps
    } = props

    return <IconWithTextWrapper>
        {iconPosition === 'left' && <Icon {...remainingProps} />}
        <Text text={text} isHeading={isHeading} isTitle={isTitle}/>
        {iconPosition === 'right' && <Icon {...remainingProps} />}
    </IconWithTextWrapper>
}

export { IconWithText }