 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err){
     return console.log("Unable to connect to the databse");
   }
   console.log("Connected to Database")

   var db = client.db("TodoApp");

   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID("5b61964d9a2aabfbc59c1282")
   },{
     $set: {
       name: "Naman"
     },
     $inc: {
       age: 1
     }
   }, {
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   });
   client.close();
 });
