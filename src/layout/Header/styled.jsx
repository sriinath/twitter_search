import styled from 'styled-components'
import { InputBox } from '../../component'

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    border-bottom: 2px solid #1da1f2;
    ${InputBox} {
        padding: 10px;
        width: 45%;
        -webkit-appearance: none;
        border: 1px solid #1da1f2;
        border-radius: 40px;
    }
`

export { HeaderWrapper }