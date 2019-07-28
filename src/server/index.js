const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const OAuth = require('oauth').OAuth
const Socket = require('./socket')

const config = {
    CONSUMER_KEY: '0XG5299e6oSESyHvLGIMGmwW3',
    CONSUMER_SECRET: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
    ACCESS_TOKEN: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
    ACCESS_TOKEN_SECRET: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl'
}

app.use('/', express.static(path.resolve('./dist/build')))
app.use('/fonts', express.static(path.resolve('./dist/fonts')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/build/index.html'))
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    res.header("Access-Control-Max-Age", "600")
    next();
});

app.get('/tweets/search', (req, res) => {
    const {
        CONSUMER_KEY,
        CONSUMER_SECRET,
        ACCESS_TOKEN,
        ACCESS_TOKEN_SECRET
    } = config
    const { query } = req
    if(query) {
        const { q, limit, offset } = query
        if(q) {
            let oauth = new OAuth(
                'https://api.twitter.com/oauth/request_token',
                'https://api.twitter.com/oauth/access_token',
                CONSUMER_KEY,
                CONSUMER_SECRET,
                '1.0',
                null,
                'HMAC-SHA1'
            );
            oauth.get(`https://api.twitter.com/1.1/search/tweets.json?q=${q}&count=${limit || 10}`, ACCESS_TOKEN, ACCESS_TOKEN_SECRET, function(err, result, resp) {
                if(!err) {
                    if(resp && resp.statusCode === 200)
                        res.send(result)
                    else 
                        res.send([])   
                }
                else {
                    console.log(err)
                    res.send([])
                }
            })    
        }
        else {
            res.send([])
        }
    }
    else {
        res.send([])
    }
})

const server = app.listen({ port: process.env.PORT || 3000 }, function() {
    console.log(`🚀 Express Serverstarted`);
})
new Socket(server).init()