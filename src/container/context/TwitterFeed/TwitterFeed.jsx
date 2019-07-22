import * as React from 'react'
import { connect } from 'react-redux'
import { TwitterGetAction } from '../../store'

const TwitterFeedContext = React.createContext({})
const { Provider, Consumer } = TwitterFeedContext

class TwitterFeed extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            children,
            data
        } = this.props
        console.log(data)
        return <Provider value={data || {}}>
            {children}
        </Provider>
    }
}

const mapStateToProps = state => ({
    data: state.ChatMessageListReducer
})
const mapDispatchToProps = dispatch => TwitterGetAction(dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed)
export { Consumer as TwitterFeedConsumer }