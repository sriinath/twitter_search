import * as React from 'react'
import { connect } from 'react-redux'
import { TwitterGetAction } from '../../store'
import { SocketConsumer } from '../Socket.jsx'

const TwitterFeedContext = React.createContext({})
const { Provider, Consumer } = TwitterFeedContext

class TwitterFeed extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'verithanam',
            bindStreamEvents: false
        }
    }
    componentDidMount() {
        const { searchTerm } = this.state
        this.props.getSearchData(searchTerm)
        this.setState({ bindStreamEvents: true })
    }
    updateSearchTerm(searchTerm) {
        this.setState({ searchTerm })
    }
    twitterStreamEvents() {
        const {
            searchTerm
        } = this.state
        if(this.socket) {
            this.socket.emit && this.socket.emit('FeedSearch', searchTerm)
            this.socket.on && this.socket.on('data', data => console.log(JSON.parse(data)))
        }
    }
    render() {
        const {
            children,
            data
        } = this.props
        const providerValue = {
            statuses: data.statuses || [],
            updateSearchTerm: this.updateSearchTerm
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
        getSearchData: (searchTerm) => dispatch(TwitterGetAction(searchTerm))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed)
export { Consumer as TwitterFeedConsumer }