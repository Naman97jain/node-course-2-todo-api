 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err){
     return console.log("Unable to connect to the databse");
   }
   console.log("Connected to Database")

   var db = client.db("TodoApp");
  db.collection("Users").find({_id: new ObjectID("5b618ed2905b172e48ee1c3f")}).count().then((count) => {
    console.log(`Users Count: ${count}`);
    //console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch data", err);
  });
  // client.close();
 });
