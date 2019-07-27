import * as React from 'react'
import * as io from 'socket.io-client'

class Socket {
    constructor(url) {
        if(url) {
            this.socket = io(url)
        }
    }
    get getSocket() {
        return this.socket
    }
}

const SocketContext = React.createContext(new Socket().getSocket)
const { Provider, Consumer } = SocketContext

const SocketProvider = props => {
    const { children, url } = props
    const socket = new Socket(url)
    return (
        <Provider value={socket && socket.getSocket} >
            {children}
        </Provider>
    )
}

export { SocketProvider, Consumer as SocketConsumer, SocketContext }