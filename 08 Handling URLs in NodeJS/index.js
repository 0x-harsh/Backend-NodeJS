const fs = require('fs')
const http = require('http')
const url = require("url")

const server = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.url}: New Req Received\n`
    const myurl = url.parse(req.url, true)
    console.log(myurl)
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myurl.pathname) {
            case '/':
                res.end("Home Page")
                break
            case '/about':
                const username = myurl.query.name
                res.end("About Page" + username)
                break
            default:
                res.end("404 Not Found!")
        }
    })
    console.log("new request recieved!")
})

server.listen(8000, () => console.log("server started!"))

// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?name=harsh',
//   query: 'name=harsh',
//   pathname: '/about',
//   path: '/about?name=harsh',
//   href: '/about?name=harsh'
// }

// in url: tic+tac+toe
// actual: tic tac toe