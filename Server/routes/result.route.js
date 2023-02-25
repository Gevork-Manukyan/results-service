const express = require("express")
const router = express.Router()
const resultController = require("../controllers/resultController")
const NotFoundError = require("../util/errors")

router.get("/getResults/:userId", async (req, res, next) => {
    try {
        const userId = req.params.userId
        const userResults = await resultController.getResultsByUser(userId)
        if (!userResults) throw new NotFoundError("User results not found")

        res.status(200).json({ userResults })

    } catch (err) {
        next(err)
    }
})

router.post("/save", async (req, res, next) => {
    
})

module.exports = router