const TwitterFeedReducer = (state = {}, action) => {
    const { type } = action
    switch(type) {
        case 'TwitterFeed': return action || state
        default: return state
    }
}

export { TwitterFeedReducer }