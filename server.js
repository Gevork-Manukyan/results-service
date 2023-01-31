const express = require("express")
const app = express()
const cors = require("cors")

app.get("/test", (req, res) => {
    console.log(req.body)
    res.send("Hello world")
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})