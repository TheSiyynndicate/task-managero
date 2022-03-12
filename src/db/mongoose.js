
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Thesiyynndicate:BSPPwdq#8G-DxYa@task-manager-api.bz5c7.mongodb.net/task-managero-api?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = client;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-managero-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })