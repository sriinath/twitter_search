var twit = require('twitter-node-client').Twitter
// var twit = new Twitter()
import { config } from '../../../config'
const {
    CONSUMER_KEY,
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} = config

const TwitterGetAction = (dispatch) => {
    const cbk = data => console.log(data)
    const TwitFeed = new twit({
        "consumerKey": CONSUMER_KEY,
    	"consumerSecret": CONSUMER_SECRET,
    	"accessToken": ACCESS_TOKEN,
        "accessTokenSecret": ACCESS_TOKEN_SECRET,
        "callBackUrl": ''
    })
    TwitFeed.getSearch({ q: 'tweet' }, cbk, cbk)
    return dispatch(TwitterSetAction({success: true}))    
}
const TwitterSetAction = action => {
    return {
        type: 'TwitterFeed',
        data: action
    }
}

export {
    TwitterSetAction,
    TwitterGetAction
}