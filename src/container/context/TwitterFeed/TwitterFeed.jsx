import * as React from 'react'
import { connect } from 'react-redux'
import { TwitterGetAction, TwitterUpdateFeedStream } from '../../store'
import { SocketConsumer } from '../Socket.jsx'

const TwitterFeedContext = React.createContext({})
const { Provider, Consumer } = TwitterFeedContext

class TwitterFeed extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: this.props.searchTerm || '',
            bindStreamEvents: false,
            latestTweets: []
        }
    }
    componentDidMount() {
        // const { searchTerm } = this.state
        // this.props.getSearchData(searchTerm)
        // this.setState({ bindStreamEvents: true })
    }
    updateSearchTerm(searchTerm) {
        const search = searchTerm && searchTerm.trim() || ''
        if(search.length) {
            this.socket.emit('disconnect')
            this.props.updateSearchData(null)
            this.props.getSearchData(search)
            this.setState({ 
                searchTerm: search,
                bindStreamEvents: true,
                latestTweets: []
            })
        }
    }
    showNewTweets() {
        let latestTweetsArr = this.state.latestTweets || []
        if(latestTweetsArr && Array.isArray(latestTweetsArr) && latestTweetsArr.length) {
            let tweetsArr = this.props.data && this.props.data.statuses || []
            let updatedTweetsArr = [...latestTweetsArr, ...tweetsArr]
            this.props.updateSearchData(updatedTweetsArr)
        }
        this.setState({ latestTweets: [] })
    }
    twitterStreamEvents() {
        const {
            searchTerm
        } = this.state
        if(this.socket) {
            this.socket.emit && this.socket.emit('FeedSearch', searchTerm)
            this.socket.on && this.socket.on('data', data => {
                let newTweet = JSON.parse(data)
                let newTweetArr = [...this.state.latestTweets] || []
                newTweetArr.unshift(newTweet)
                this.setState({ latestTweets: newTweetArr })
            })
        }
    }
    render() {
        const {
            children,
            data
        } = this.props
        const providerValue = {
            statuses: data.statuses || [],
            newTweetCount: this.state.latestTweets && this.state.latestTweets.length || 0,
            updateSearchTerm: (searchTerm) => this.updateSearchTerm(searchTerm),
            showNewTweets: () => this.showNewTweets()
        }
        return <SocketConsumer>
            {socket => {
                this.socket = socket
                if(this.state.bindStreamEvents && socket && data && data.statuses && data.statuses.length) {
                    this.setState({ bindStreamEvents: false })
                    this.twitterStreamEvents()
                }
                return <Provider value={providerValue}>
                    {children}
                </Provider>
            }}
        </SocketConsumer>
    }
}

const mapStateToProps = state => ({
    data: state.TwitterFeedReducer
})
const mapDispatchToProps = dispatch => {
    return {
        getSearchData: searchTerm => dispatch(TwitterGetAction(searchTerm)),
        updateSearchData: data => dispatch(TwitterUpdateFeedStream(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed)
export { Consumer as TwitterFeedConsumer }