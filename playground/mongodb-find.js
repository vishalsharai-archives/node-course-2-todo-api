const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
      if (err) {
        return console.log('Unable to connect to the MongoDB server');
      }
      console.log('Connected to mongodb Server');
      //
      // db.collection('Todos').find({
      //   _id: new ObjectID('5963a0aad60a24a7113d47a1')
      // }).toArray().then((docs) =>{
      //   console.log('Todos:');
      //   console.log(JSON.stringify(docs, undefined,2));
      // }, (err) =>{
      //   console.log('Unable to fetch',err);
      // });

            db.collection('Todos').find().count().then((count) =>{
              console.log(`Todos Count: ${count}`);
            }, (err) =>{
              console.log('Unable to fetch',err);
            });
          db.collection('Users').find({name:'Vishal Sharai'}).toArray().then((docs) =>{
            console.log('Todo:');
            console.log(JSON.stringify(docs, undefined,2));
          },(err) =>{
            console.log('Couldnt connect to server');
          });
      // db.close();
});
