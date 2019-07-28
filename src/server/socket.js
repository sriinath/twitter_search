const socket = require('socket.io')
const OAuth = require('oauth').OAuth
const request = require('request')

const config = {
    CONSUMER_KEY: '0XG5299e6oSESyHvLGIMGmwW3',
    CONSUMER_SECRET: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
    ACCESS_TOKEN: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
    ACCESS_TOKEN_SECRET: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl'
}

class Socket {
    constructor(server) {
        this.socketIO = socket(server)
        this.searchTerm = ''
        this.request = null 
    }
    init() {
        this.socketIO.on('connection', socket => {
            this.bindEvents(socket)
        })
    }
    bindEvents(socket) {
        socket.on('FeedSearch', searchTerm => {
            this.searchTerm =  searchTerm
            this.startTwitterStream(socket)
        })
        socket.on('disconnect', () => this.request.destroy())
    }
    setAuthHeader() {
        const {
            CONSUMER_KEY,
            CONSUMER_SECRET,
            ACCESS_TOKEN,
            ACCESS_TOKEN_SECRET
        } = config
        let oauth = new OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            CONSUMER_KEY,
            CONSUMER_SECRET,
            '1.0',
            null,
            'HMAC-SHA1',
            1
        );
        return oauth.authHeader(
            `https://stream.twitter.com/1.1/statuses/filter.json?track=${this.searchTerm}`,
            ACCESS_TOKEN,
            ACCESS_TOKEN_SECRET,
            'get'
        )
    }
    startTwitterStream(socket) {
        const header = this.setAuthHeader()
        const reqContent = {
            uri: `https://stream.twitter.com/1.1/statuses/filter.json?track=${this.searchTerm}`,
            method: 'GET',
            headers: {
                Authorization: header,
                'content-type': 'application/json'
            }
        }
        this.request = request(reqContent)
        this.request.on('response', response => {
            if(response && response.statusCode === 200) {
                this.request.on('data', chunk => {
                    socket.emit('data', chunk.toString())
                })
                this.request.on('end', () => {
                    socket.emit('data', 'end')
                    console.log('end of response')
                })
            }
            else if(response && response.statusCode === 401) {
                this.request.destroy()
                socket.emit('Unauthorized')
            }
            else if(response && response.statusCode === 500) {
                this.request.destroy()
                socket.emit('Internal serevr error')
            }
            else if(response && response.statusCode && response.statusCode === 420) {
                this.request.destroy()
                socket.emit('Rate limit')
            }
            else {
                console.log('Something went wrong')
                socket.emit('Some thing went wrong')
            }
        })
        this.request.on('error', err => console.log(err))
    }
}

module.exports =  Socket