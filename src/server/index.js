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
// app.get('/tweets/stream', (req, res) => {
//     const {
//         CONSUMER_KEY,
//         CONSUMER_SECRET,
//         ACCESS_TOKEN,
//         ACCESS_TOKEN_SECRET
//     } = config
//     const { query } = req
//     if(query) {
//         const { q } = query
//         if(q) {
//             let oauth = new OAuth(
//                 'https://api.twitter.com/oauth/request_token',
//                 'https://api.twitter.com/oauth/access_token',
//                 CONSUMER_KEY,
//                 CONSUMER_SECRET,
//                 '1.0',
//                 null,
//                 'HMAC-SHA1',
//                 1
//             );
//             const header = oauth.authHeader(
//                 'https://stream.twitter.com/1.1/statuses/filter.json?track=verithanam',
//                 ACCESS_TOKEN,
//                 ACCESS_TOKEN_SECRET,
//                 'get'
//             )
//             const reqContent = {
//                 uri: 'https://stream.twitter.com/1.1/statuses/filter.json?track=verithanam',
//                 method: 'GET',
//                 headers: {
//                     Authorization: header,
//                     'content-type': 'application/json'
//                 }
//             }
//             const req = request(reqContent)
//             req.on('response', response => {
//                 if(response && response.statusCode === 200) {
//                     req.on('data', chunk => {
//                         data += chunk
//                         console.log(chunk.toString())
//                     })
//                     req.on('end', () => {
//                         console.log('end of response')
//                     })
//                 }
//                 else if(response && response.statusCode === 401) {
//                     req.destroy()
//                     res.send({
//                         message: 'You are unathorized to access the API',
//                         statusCode: 401
//                     })
//                 }
//                 else if(response && response.statusCode === 500) {
//                     req.destroy()
//                     res.send({
//                         message: 'There was something wrong in the server',
//                         statusCode: 500
//                     })
//                 }
//                 else if(response && response.statusCode && response.statusCode === 420) {
//                     req.destroy()
//                     setTimeout(() => {
                        
//                     }, 500)
//                 }
//                 else if(response && response.statusCode && response.statusCode > 400 && response.statusCode < 500) {
//                     req.destroy()
//                     res.send({
//                         message: 'There was something woring in server'
//                     })
//                 }
//                 else {
//                     console.log('Something went wrong')
//                 }
//             })
//         }
//         else {
//             res.send([])
//         }
//     }
//     else {
//         res.send([])
//     }
// })

const server = app.listen({ port: process.env.PORT || 3000 }, function() {
    console.log(`🚀 Express Serverstarted`);
})
new Socket(server).init()