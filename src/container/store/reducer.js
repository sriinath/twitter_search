import { combineReducers } from 'redux'
import * as Reducers from './reducer/TwitterFeed'

const TwitterFeedStore = combineReducers(Reducers)

export default TwitterFeedStore
export { TwitterFeedStore }