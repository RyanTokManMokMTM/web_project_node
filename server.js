const express = require("express")
const server = express()
const http = require('http')
const cors = require('cors')
const env = require('dotenv')
const cookieParser = require('cookie-parser')
env.config({ path: './.env' })

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors({ credentials: true }))
server.use(cookieParser())
server.use("/api/v1/user", require("./router/userRoute"))

server.use("/", (req, res, next) => {
    res.json({
        success: false,
        message: "404 NOT FOUND"
    })
})


http.createServer(server).listen(8080, "127.0.0.1", () => {
    console.log("server is on")
})