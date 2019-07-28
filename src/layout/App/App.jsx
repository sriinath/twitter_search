import * as React from 'react'
import { TwitterFeed } from '../TwitterFeed'
import { AppWrapper } from './styled.jsx'
import { TwitterFeedContainer, SocketProvider } from '../../container'
import { Header } from '../Header'

const App = props => {
    let socketUrl = location.origin || 'http://localhost:3000'
    return <AppWrapper>
        <SocketProvider url={socketUrl}>
            <TwitterFeedContainer>
                <Header />
                <TwitterFeed />
            </TwitterFeedContainer>
        </SocketProvider>
    </AppWrapper>
}

export { App }