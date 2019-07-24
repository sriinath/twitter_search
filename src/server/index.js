const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const OAuth = require('oauth').OAuth

const config = {
    CONSUMER_KEY: '0XG5299e6oSESyHvLGIMGmwW3',
    CONSUMER_SECRET: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
    ACCESS_TOKEN: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
    ACCESS_TOKEN_SECRET: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl'
}

app.use('/build', express.static(path.resolve('./dist')))
app.use('/fonts', express.static(path.resolve('./dist/fonts')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
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
        const { q } = query
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
            oauth.get('https://api.twitter.com/1.1/search/tweets.json?q=tweet&count=10', ACCESS_TOKEN, ACCESS_TOKEN_SECRET, function(err, result, resp) {
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
app.get('/tweets/stream', (req, res) => {
    const {
        CONSUMER_KEY,
        CONSUMER_SECRET,
        ACCESS_TOKEN,
        ACCESS_TOKEN_SECRET
    } = config
    const { query } = req
    if(query) {
        const { q } = query
        if(q) {
            let customHeaders = {
                keepAlive: true
            }
            let oauth = new OAuth(
                'https://api.twitter.com/oauth/request_token',
                'https://api.twitter.com/oauth/access_token',
                CONSUMER_KEY,
                CONSUMER_SECRET,
                '1.0',
                null,
                'HMAC-SHA1',
                1,
                customHeaders
            );
            let request = oauth.post('https://api.twitter.com/1.1/statuses/filter.json?track=tweet', ACCESS_TOKEN, ACCESS_TOKEN_SECRET) 
            request.on('response', response => {
                console.log(response)
                request.on('data', chunk => console.log(chunk))
                request.on('end', () => console.log('req ended'))
            })
            // function(err, result, resp) {
            //     if(!err) {
            //         console.log(resp)
            //         if(resp && resp.statusCode === 200) {
            //             result.on('data' => console.log(chunk))
            //         }
            //         else 
            //             res.send([])   
            //     }
            //     else {
            //         console.log(err)
            //         res.send([])
            //     }
            // })    
        }
        else {
            res.send([])
        }
    }
    else {
        res.send([])
    }
})

app.listen({ port: process.env.PORT || 3000 }, function() {
    console.log(`🚀 Express Serverstarted`);
})
