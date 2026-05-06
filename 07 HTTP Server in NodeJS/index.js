const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.url}: New Req Received\n`
    switch (req.url) {
        case '/':
            fs.appendFile("log.txt", log, (err, data) => {
                res.end("Hello from server")
            })
            break
        case '/about':
            fs.appendFile("log.txt", log, (err, data) => {
                res.end("Hello from server")
            })
            break
        default:
            res.end("404 Not Found!")
    }
    console.log("new request recieved!")
})

server.listen(8000, () => console.log("server started!"))