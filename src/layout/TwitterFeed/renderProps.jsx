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
    console.log(props)
    return <TwitterItemWrapper>
        {/* {renderUserImage(userImage)*/}
        {renderTwitterContent(props)}
    </TwitterItemWrapper>
}
const renderTwitterContent = props => {
    const {
        user,
        text,
        retweet_count,
        favorite_count,
    } = props
    return <>
        {renderTweetHeader(user)}
        {renderTweetBody(text)}
        {renderTweetFooter({ favorite_count, retweet_count })}
    </>
}
const renderTweetHeader = props => {
    const {
        name,
        screen_name
    } = props

    return <TwitterHeadWrapper>
        <Text
            text={name}
            isHeading={false}
            isTitle={true}
        />
        <Text
            text={screen_name}
            isHeading={false}
        />
        {/* <Text
            text={tweetTime}
            isHeading={false}
        /> */}
    </TwitterHeadWrapper>
}
const renderTweetBody = text => {
    return <TwitterBodyWrapper>
        <Text
            text={text}
            isHeading={false}
        />
    </TwitterBodyWrapper> 
}
const renderTweetFooter = props => {
    const {
        favorite_count,
        retweet_count,
        comment_count
    } = props

    return <TwitterFooterWrapper>
        <IconWithText
            text={comment_count ? comment_count.toString() : '0'}
            isHeading={false}
            iconPosition='left'
        />
        <IconWithText
            text={retweet_count ? retweet_count.toString() : '0'}
            isHeading={false}
            iconPosition='left'
        />
        <IconWithText
            text={favorite_count ? favorite_count.toString() : '0'}
            isHeading={false}
            iconPosition='left'
        />
    </TwitterFooterWrapper>
}
const renderUserImage = image => {

}

export { TwitterItem }