const express = require('express')
const path = require('path')
const urlRouter = require('./routes/url')
const URL = require('./models/url')
const { connectToMongoDB } = require('./connection')

const app = express()
const PORT = 8001

connectToMongoDB('mongodb://127.0.0.1:27017/url-shortener')
    .then(() => console.log("Connected to MongoDB"))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', async (req, res) => {
    const allUrls = await URL.find({})
    return res.render('home', {
        urls: allUrls,
    })
})

app.use("/url", urlRouter)

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        }
    })
    res.redirect(entry.redirectUrl)
})

app.listen(PORT, () => {
    console.log(`Server is listening at \nhttp://localhost:${PORT}`)
})