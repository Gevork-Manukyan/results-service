const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://gmanukyan:grMgan46525@results-service.n4rovio.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


