const {getUser} = require("../service/auth")

async function restrictToLoggedInUserOnly(req, res, next) {
    // const token = req.cookies?.token
    const authToken = req.headers["Authorization"]
    if(!authToken) return res.redirect("/login")
    console.log(authToken)
    // const token = authToken.split("Bearer")[1]

    // const user = getUser(token)
    // if(!user) return res.redirect("/login")

    // req.user = user
    next()
}

async function checkAuth(req, res, next) {
    // const token = req.cookies?.token
    const authToken = req.headers["authorization"]
    const token = authToken.split("Bearer ")[1]
    const user = getUser(token)

    req.user = user
    next()
}

module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth,
}