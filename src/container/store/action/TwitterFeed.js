const TwitterGetAction = (dispatch) => {
    fetch('http://localhost:3000/tweets/search?q=tweet')
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
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