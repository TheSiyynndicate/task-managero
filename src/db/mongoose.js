
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Thesiyynndicate:RCIIZ8m5X7Jg7r0y@cluster0.bz5c7.mongodb.net/task-managero-api?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-managero-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })