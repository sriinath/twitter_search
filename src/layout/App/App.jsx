import * as React from 'react'
import { TwitterFeed } from '../TwitterFeed'
import { AppWrapper } from './styled.jsx'
import { TwitterFeedContainer } from '../../container'
import { Header } from '../Header'

const App = props => {
    return <AppWrapper>
        <Header />
        <TwitterFeedContainer>
            <TwitterFeed />
        </TwitterFeedContainer>
    </AppWrapper>
}

export { App }