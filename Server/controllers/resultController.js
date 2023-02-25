const Result = require("../models/result.model")

exports.getResultsByUser = async (userId) => {
    const userResults = Result.find({ userId })
    return userResults
}