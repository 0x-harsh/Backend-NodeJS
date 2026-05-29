const mongoose = require("mongoose")

async function connectMongoDb(url) {
    // MongoDB Connection
    return mongoose.connect(url)
}

module.exports = {
    connectMongoDb,
}