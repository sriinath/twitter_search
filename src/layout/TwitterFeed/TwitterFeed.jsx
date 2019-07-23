import * as React from 'react'
import { TwitterFeedWrapper } from './styled.jsx'
import { ListItem } from '../../component'
import { TwitterItem } from './renderProps.jsx'
import { TwitterFeedConsumer } from '../../container'

const TwitterFeed = props => {
    return <TwitterFeedWrapper>
        <TwitterFeedConsumer>
            {context => <ListItem
                    list={context || []}
                    Item={TwitterItem}
                />
            }
        </TwitterFeedConsumer>
    </TwitterFeedWrapper>
}

export { TwitterFeed }