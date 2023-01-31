const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")


// MIDDLEWARE
app.use(cors())
app.use(express.json()) // Parse incoming requests with JSON payloads
app.use(morgan("tiny")) // Log requests info



app.get("/test", (req, res) => {
    console.log(req.body)
    res.send("Hello world")
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})