import * as React from 'react'
import { TwitterFeedWrapper } from './styled.jsx'
import { ListItem } from '../../component'
import { TwitterItem } from './renderProps.jsx'

const context = [{
    retweets: 10,
    comments: 15,
    hearts: 8,
    userName: 'Srinath',
    userImage: '',
    userLink: '',
    twitterName: '@srinath',
    tweetTime: '8h',
    tweetText: 'hello',
    tweetImage: ''
},
{
    retweets: 10,
    comments: 15,
    hearts: 8,
    userName: 'Srinath',
    userImage: '',
    userLink: '',
    twitterName: '@srinath',
    tweetTime: '8h',
    tweetText: 'hello',
    tweetImage: ''
}]

class TwitterFeed extends React.PureComponent {
    render() {
        return <TwitterFeedWrapper>
            <ListItem
                list={context}
                Item={TwitterItem}
            />
        </TwitterFeedWrapper>
    }
}

export { TwitterFeed }