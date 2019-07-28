import styled from 'styled-components'
import { InputBox } from '../../component'

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    ${InputBox} {
        padding: 10px;
        width: 45%;
        -webkit-appearance: none;
        border: 1px solid #1da1f2;
        border-radius: 40px;
        &[type='submit'] {
            cursor: pointer;
            margin-left: 10px;
            width: 15%;
            background-color: #1da1f2;
            color: #fff;
            &:hover {
                background-color: #fff;
                color: #1da1f2;
            }
        }
    }
`
const HeaderInputContainer = styled.div`
    padding: 10px;
    text-align: center;
    background-color: #fff;
    border-bottom: 2px solid #1da1f2;
`
const NewTweetCont = styled.div`
    background: #fff;
    margin: auto;
    padding: 10px;
    border: 1px solid #1da1f2;
    color: #1da1f2;
    width: 25%;
    text-align: center;
    border-radius: 25px;
    margin-top: 10px;`

export { HeaderWrapper, HeaderInputContainer, NewTweetCont }