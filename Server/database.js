const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


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
