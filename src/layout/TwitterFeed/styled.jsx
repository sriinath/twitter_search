import styled from 'styled-components'
import {
    TextElement,
    IconElement,
    IconWithTextWrapper
} from '../../component'

const TwitterFeedWrapper = styled.div`
`
const TwitterItemWrapper = styled.div`
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #a7a7a7;
`
const TwitterHeadWrapper = styled.div`
    display: flex;
    ${TextElement} {
        padding: 5px;
        color: #657786;
        font-size: 14px;
        line-height: 14px;
        &:nth-child(1) {
            color: #000;
        }
        &:nth-child(1),
        &:nth-child(2) {
            cursor: pointer;
        }
    }
`
const TwitterBodyWrapper = styled.div`
    color: #000;
    font-size: 14px;
    line-height: 20px;
    padding: 0px 5px;
`
const TwitterFooterWrapper = styled.div`
    display: flex;
    color: #657786;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    ${IconWithTextWrapper} {
        cursor: pointer;
        align-items: center;
        padding: 5px;
        &:hover {
            color: #1da1f2;
            ${IconElement} {
                color: #1da1f2;
            }
        }
        ${IconElement} {
            padding-right: 3px;
            color: #657786;
        }
        &:nth-child(1) {
            ${IconElement} {
                &::before {
                    content: "\f0e5";
                }
            }
        }
        &:nth-child(2) {
            ${IconElement} {
                &::before {
                    content: "\f079";
                }
            }
        }
        &:nth-child(3) {
            ${IconElement} {
                &::before {
                    content: "\f08a";
                }
            }
        }
    }
`

export {
    TwitterFeedWrapper,
    TwitterItemWrapper,
    TwitterHeadWrapper,
    TwitterBodyWrapper,
    TwitterFooterWrapper
}