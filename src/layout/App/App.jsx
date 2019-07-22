import * as React from 'react'
import { TwitterFeed } from '../TwitterFeed'
import { AppWrapper } from './styled.jsx'
import { TwitterFeedContainer } from '../../container'

const App = props => {
    return <AppWrapper>
        <TwitterFeedContainer>
            <TwitterFeed />
        </TwitterFeedContainer>
    </AppWrapper>
}

export { App }