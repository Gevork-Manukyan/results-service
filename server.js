const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")


// MIDDLEWARE
app.use(cors())
app.use(express.json()) // Parse incoming requests with JSON payloads
app.use(morgan("tiny")) // Log requests info



app.put("/test", (req, res) => {
    console.log(req.body)
    const data = req.body 
    res.send(req.body.data)
})

app.get("/", (req, res) => {
    
    res.send(req.body.myKey)
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})