import * as React from 'react'
import {
    TwitterItemWrapper,
    TwitterBodyWrapper,
    TwitterFooterWrapper,
    TwitterFeedWrapper,
    TwitterHeadWrapper
} from './styled.jsx'
import {
    Text,
    IconWithText
} from '../../component'

const TwitterItem = props => {
    const {
        userImage
    } = props

    return <TwitterItemWrapper>
        {renderUserImage(userImage)}
        {renderTwitterContent(props)}
    </TwitterItemWrapper>
}
const renderTwitterContent = props => {
    const {
        userLink,
        userName,
        tweetTime,
        tweetText,
        twitterName,
        hearts,
        comments,
        retweets
    } = props
    return <>
        {renderTweetHeader({ userLink, userName, tweetTime, twitterName })}
        {renderTweetBody({ tweetText })}
        {renderTweetFooter({ comments, hearts, retweets })}
    </>
}
const renderTweetHeader = props => {
    const {
        userName,
        twitterName,
        tweetTime
    } = props

    return <TwitterHeadWrapper>
        <Text
            text={userName}
            isHeading={false}
            isTitle={true}
        />
        <Text
            text={twitterName}
            isHeading={false}
        />
        <Text
            text={tweetTime}
            isHeading={false}
        />
    </TwitterHeadWrapper>
}
const renderTweetBody = props => {
    const {
        tweetText
    } = props
    return <TwitterBodyWrapper>
        <Text
            text={tweetText}
            isHeading={false}
        />
    </TwitterBodyWrapper> 
}
const renderTweetFooter = props => {
    const {
        retweets,
        hearts,
        comments
    } = props

    return <TwitterFooterWrapper>
        <IconWithText
            text={retweets.toString()}
            isHeading={false}
            iconPosition='left'
        />
        <IconWithText
            text={hearts.toString()}
            isHeading={false}
            iconPosition='left'
        />
        <IconWithText
            text={comments.toString()}
            isHeading={false}
            iconPosition='left'
        />
    </TwitterFooterWrapper>
}
const renderUserImage = image => {

}

export { TwitterItem }