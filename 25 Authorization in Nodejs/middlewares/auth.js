const { getUser } = require("../service/auth")

function checkForAuthentication(req, res, next) {
    // const authHeaderValue = req.headers["authorization"]
    req.user = null
    // if(!authHeaderValue || !authHeaderValue.startsWith('Bearer')) {
    //     return next()
    // }
    // const token = authHeaderValue.split("Bearer ")[1]
    const token = req.cookies?.token
    if (!token) return next()
    const user = getUser(token)
    if (!user) return next()
    req.user = user
    return next()
}

function restrictTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login')

        if (!roles.includes(req.user.role)) return res.end("UnAuthorized")
        return next()
    }
}

async function restrictToLoggedInUserOnly(req, res, next) {
    // const token = req.cookies?.token
    const authToken = req.headers["Authorization"]
    if (!authToken) return res.redirect("/login")
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
    checkForAuthentication,
    restrictTo
}