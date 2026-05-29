const express = require('express')
const { connectMongoDb } = require('./connection')

const { logReqRes } = require('./middlewares')
const userRouter = require('./routes/user')
// const {} = require('./middlewares/index')

const app = express()
const PORT = 8000

// MongoDB Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => console.log("mongodb connected!"))

// middleware or plugin
app.use(express.urlencoded({ extended: false }))
// gets the urlencoded form data and puts this data into req.body

app.use(logReqRes("log.txt"))

// Routes
app.use('/user', userRouter)

app.listen(PORT, (req, res) => {
    console.log(`app is listening at port: ${PORT}`)
    console.log(`http://localhost:8000/`)
})