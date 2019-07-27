import * as React from 'react'
import { TwitterFeed } from '../TwitterFeed'
import { AppWrapper } from './styled.jsx'
import { TwitterFeedContainer, SocketProvider } from '../../container'
import { Header } from '../Header'

const App = props => {
    return <AppWrapper>
        <Header />
        <SocketProvider url='http://localhost:3000'>
            <TwitterFeedContainer>
                <TwitterFeed />
            </TwitterFeedContainer>
        </SocketProvider>
    </AppWrapper>
}

export { App }