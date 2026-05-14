const express = require('express')
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => {
        return `<li>${user.first_name}</li>`
    }).join("")}
    </ul>
    `
    res.send(html)
})

// REST API Routes

app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    if (user) return res.json(user)
    else return res.send('user does not exist')
})

app.post('/api/users/', (req, res) => {
    // todo: create new user
    return res.json({ "status": "pending" })
})

app.patch('/api/users/:id', (req, res) => {
    // todo: edit the user with id
    return res.json({ "status": "pending" })
})

app.delete('/api/users/:id', (req, res) => {
    // todo: delete the user with id
    return res.json({ "status": "pending" })
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