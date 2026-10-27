import express from "express"
import cluster from "cluster"
import os from "os"

const totalCPUs = os.cpus().length

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork()
    }
} else {
    const app = express()
    const PORT = 3000

    app.get("/", (req, res) => {
        return res.send(`Hello from Node.js app running on port ${process.pid}`)
    })

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}