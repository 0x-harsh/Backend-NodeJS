const fs = require('fs')
const express = require('express')
let users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000

// middleware or plugin
app.use(express.urlencoded({ extended: false }))
// gets the urlencoded form data and puts this data into req.body

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
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ "status": "success", id: users.length })
    })
})

app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const dataToUpdate = req.body
    const user = users.find(user => user.id === id)
    if (user) {
        users = users.filter(user => user.id != id)
        users.push({ ...user, ...dataToUpdate })
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: "success" })
        })
    } else {
        res.send("user does not exist")
    }

})

app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    const userToDelete = users.find(user => user.id === id)
    if (userToDelete) {
        users = users.filter(user => user.id != id)
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            res.json({ status: "success" })
        })
    } else {
        res.json({ status: "user does not exist" })
    }
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