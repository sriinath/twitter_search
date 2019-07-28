import * as React from 'react'
import { useState } from 'react'
import { HeaderWrapper, HeaderInputContainer, NewTweetCont } from './styled.jsx'
import { Input, Text } from '../../component'
import { TwitterFeedConsumer } from '../../container'

const Header = (props) => {
    const [ searchTerm, updateSearchTerm ] = useState('')
    return <HeaderWrapper>
        <TwitterFeedConsumer>
            {context => {
                return <>
                    <HeaderInputContainer>
                        <form onSubmit={e => {
                            e.preventDefault()
                            context.updateSearchTerm(searchTerm)
                        }}>
                            <Input
                                value={searchTerm}
                                placeholder='Search for Tweets'
                                onChange={e => updateSearchTerm(e.currentTarget.value)}
                            />
                            <Input value='Search' type='submit' />
                        </form>
                    </HeaderInputContainer>
                    {context.newTweetCount > 0 ? <NewTweetCont onClick={context.showNewTweets}>
                        <Text text='New Tweets' isHeading={false} />
                    </NewTweetCont> : null
                    }
                </>
            }}
        </TwitterFeedConsumer>
    </HeaderWrapper>
}

export { Header }