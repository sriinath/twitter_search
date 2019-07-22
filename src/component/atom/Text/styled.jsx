import Styled, { css } from 'styled-components'

const TextElement = Styled.div`
    ${props => `
        font-weight: ${props.isTitle ? 'bold': 'normal'};
        ${props.ellipsis ? css`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        ` : ''}
    `
    }
`

export { TextElement }