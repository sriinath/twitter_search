import styled, { css } from 'styled-components'

const IconElement = styled.div`
    ${props => css`
        font-family: ${props.fontFamily || 'FontAwesome'};
        font-size: ${props.fontFamily || '16px'};
        color: ${props.fontColor || '#fff'};
    `}
`

export { IconElement }