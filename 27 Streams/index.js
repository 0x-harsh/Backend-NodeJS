import express from "express"
import fs from "fs"
import zlib from "zlib"
// import status from "express-status-monitor"

const app = express()
const PORT = 3000

// app.use(status())

fs.createReadStream("./sample.txt", "utf-8").pipe(
    zlib.createGzip().pipe(fs.createWriteStream("sample.zip"))
)

app.get("/", (req, res) => {
    const stream = fs.createReadStream("./sample.txt", "utf-8")
    stream.on("data", (chunk) => {
        res.write(chunk)
    })
    stream.on("end", () => {
        res.end()
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})