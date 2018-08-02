 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err){
     return console.log("Unable to connect to the databse");
   }
   console.log("Connected to Database")

   var db = client.db("TodoApp");
   // db.collection('Users').deleteMany({name: "Naman"}).then((result) =>{
   //   console.log(result);
   // });

   // db.collection('Users').deleteOne({age: 20}).then((result) =>{
   //   console.log(result);
   // });
   db.collection('Users').findOneAndDelete({age: 20}).then((result) =>{
      console.log(result);
    });
  // client.close();
 });
