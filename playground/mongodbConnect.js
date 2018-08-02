 const MongoClient = require('mongodb').MongoClient;

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if(err){
     return consple.log("Unable to connect to the databse");
   }
   console.log("Connected to Database")

   var db = client.db("TodoApp");
  //  db.collection('TodoApp').insertOne({
  //    text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert data", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection("Users").insertOne({
    name:"Naman",
    age:20,
    location: "Gurugram"
  }, (err, result) => {
    if(err){
      return console.log("Unable to insert data", err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
   client.close();
 });
