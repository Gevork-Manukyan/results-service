const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  response: {type: String, required: true},
  size: {type: String, required: true},
  relation: {type: String, required: true},
  region: {type: String, required: true},
  confidence: {type: Number, required: true}
})

const Result = mongoose.model('Result', resultSchema)
module.exports = Result