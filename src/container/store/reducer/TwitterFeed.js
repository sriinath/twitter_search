const TwitterFeedReducer = (state = {}, action) => {
    const { type } = action
    switch(type) {
        case 'TwitterFeed': return action && action.data || {}
        case 'TwitterStreamUpdate': {
            let updateState = { ...state }
            updateState.statuses = action.data || []
            return updateState
        }
        default: return state
    }
}

export { TwitterFeedReducer }