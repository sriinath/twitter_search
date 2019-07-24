import * as React from 'react'
import { connect } from 'react-redux'
import { TwitterGetAction } from '../../store'

const TwitterFeedContext = React.createContext({})
const { Provider, Consumer } = TwitterFeedContext

class TwitterFeed extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getSearchData()
    }
    render() {
        const {
            children,
            data
        } = this.props
        return <Provider value={data && data.statuses || []}>
            {children}
        </Provider>
    }
}

const mapStateToProps = state => ({
    data: state.TwitterFeedReducer
})
const mapDispatchToProps = dispatch => {
    return {
        getSearchData: () => dispatch(TwitterGetAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed)
export { Consumer as TwitterFeedConsumer }