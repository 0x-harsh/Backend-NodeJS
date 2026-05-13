const fs = require('fs')
const http = require('http')
const url = require("url")

const server = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.method} ${req.url}: New Req Received\n`
    const myurl = url.parse(req.url, true)
    console.log(myurl)
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myurl.pathname) {
            case '/':
                if (req.method === 'GET') req.end('Home Page')
                break
            case '/about':
                const username = myurl.query.name
                res.end("About Page" + username)
                break
            case '/signup':
                if (req.method === 'GET') res.end('Sign Page')
                else if (req.method === 'POST') {
                    // DB Query
                    res.end('Success!')
                }
                break
            default:
                res.end("404 Not Found!")
        }
    })
    console.log("new request recieved!")
})

server.listen(8000, () => console.log("server started!"))

// HTTP METHODS

// GET => to get some data from the server
// POST => to submit some data to the server
// PUT => to send the files like photos, videos etc.
// PATCH => to update some data to the server
// DELETE => to remove some data from the server