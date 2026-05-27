const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

let users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error:", err))

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
}, { timestamps: true })

// Model
const User = mongoose.model('user', userSchema)

// middleware or plugin
app.use(express.urlencoded({ extended: false }))
// gets the urlencoded form data and puts this data into req.body

app.get('/users', async (req, res) => {
    const allDbUsers = await User.find({})
    const html = `
    <ul>
        ${allDbUsers.map((user) => {
        return `<li>${user.firstName} - ${user.email}</li>`
    }).join("")}
    </ul>
    `
    res.send(html)
})

// REST API Routes

app.get('/api/users', async (req, res) => {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
})

app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    if (user) return res.json(user)
    else return res.send('user does not exist')
})

app.post('/api/users/', async (req, res) => {
    const body = req.body
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "all fields are required." })
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })

    console.log(result)

    return res.status(201).json({ msg: "success" })
})

app.patch('/api/users/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' })
    return res.json({ status: "success" })

})

app.delete('/api/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({msg: "success"})
})

app.listen(PORT, (req, res) => {
    console.log(`app is listening at port: ${PORT}`)
    console.log(`http://localhost:8000/`)
})


// We can use this format for common route
// app
//     .route('/api/users/:id')
//     .patch((req, res) => {
//         // todo: edit the user with id
//         return res.json({ "status": "pending" })
//     })
//     .delete((req, res) => {
//         // todo: delete the user with id
//         return res.json({ "status": "pending" })
//     })