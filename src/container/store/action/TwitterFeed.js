const TwitterGetAction = (searchTerm) => {
    return dispatch => {
        fetch(`http://localhost:3000/tweets/search?q=${searchTerm}`)
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
const TwitterSetStream = action => {
    return {
        type: 'TwitterStream',
        data: action
    }
}
export {
    TwitterSetAction,
    TwitterGetAction,
    TwitterSetStream,
}