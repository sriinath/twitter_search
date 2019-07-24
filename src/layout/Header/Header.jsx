import * as React from 'react'
import { HeaderWrapper } from './styled.jsx'
import { Input } from '../../component'

const Header = (props) => {
    return <HeaderWrapper>
        <Input placeholder='Search for Tweets' />
    </HeaderWrapper>
}

export { Header }