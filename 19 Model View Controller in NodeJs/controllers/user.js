const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    const id = req.params.id
    const user = await User.findById(id)
    if (user) return res.json(user)
    else return res.send('user does not exist')
}

async function handleCreateUser (req, res) {
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
}

async function handleUpdateUserById (req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' })
    return res.json({ status: "success" })
}

async function handleDeleteUserById (req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({msg: "success"})
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById,
}