const express = require("express")
const server = express()
const http = require('http')
const cors = require('cors')
const env = require('dotenv')
const cookieParser = require('cookie-parser')
env.config({ path: './.env' })

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
    // server.use(cors({
    //     origin: "http://localhost:3000",
    //     optionsSuccessStatus: 200,
    //     credentials: true
    // }))
server.use(cookieParser())

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Credentials', '*')
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     next()
// })

server.use("/api/v1/user", require("./router/userRoute"))
server.use("/api/v1/movie", require("./router/movieRoute"))

server.use("/", (req, res, next) => {
    res.json({
        success: false,
        message: "404 NOT FOUND"
    })
})


http.createServer(server).listen(8080, "127.0.0.1", () => {
    console.log("server is on")
})