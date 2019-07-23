const TwitterGetAction = () => {
    return dispatch => {
        fetch('http://localhost:3000/tweets/search?q=tweet')
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

export {
    TwitterSetAction,
    TwitterGetAction
}