const RestAPIDomain = location.origin || 'http://localhost:3000'
const TwitterGetAction = (searchTerm) => {
    return dispatch => {
        fetch(`${RestAPIDomain}/tweets/search?q=${searchTerm}`)
        .then(data => data.json())
        .then(data => {
            dispatch(TwitterSetAction(data))
        })
        .catch(err => console.log(err))
    }
}
const TwitterSetAction = action => {
    return {
        type: 'TwitterFeed',
        data: action
    }
}
const TwitterUpdateFeedStream = action => {
    return {
        type: 'TwitterStreamUpdate',
        data: action
    }
}
export {
    TwitterSetAction,
    TwitterGetAction,
    TwitterUpdateFeedStream,
}