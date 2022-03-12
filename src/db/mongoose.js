const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://Thesiyynndicate:${encodeURIComponent('BSPPwdq#8G-DxYa')}@task-manager-api.bz5c7.mongodb.net/task-manager-api?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.version });
// client.connect(err => {
//   const collection = client.db("task-manager-api").collection("users");
//   // perform actions on the collection object
//   client.close();
// });


// const mongooseClient =  mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true, serverApi: ServerApiVersion.v1},(val)=>{});
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri,{     useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true});
}


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-managero-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })