import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './container/store/reducer'
import thunk from 'redux-thunk'

import App from './layout'
import { Global } from './common'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Global />
        <App />
    </Provider>,
    document.getElementById('root')
);