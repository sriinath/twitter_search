const TwitterFeedReducer = (state = {}, action) => {
    const { type } = action
    switch(type) {
        case 'TwitterFeed': return action && action.data || {}
        default: return state
    }
}

export { TwitterFeedReducer }