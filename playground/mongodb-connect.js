const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
      if (err) {
        return console.log('Unable to connect to the MongoDB server');
      }
      console.log('Connected to mongodb Server');

      // db.collection('Todos').insertOne({
      //   text:'something to do',
      //   completed:'false'
      // },(err,result) =>{
      //   if (err) {
      //     return  console.log('Unable to insert todo',err);
      //   }
      //   console.log(JSON.stringify(result.ops, undefined,2));
      // });
      //
      // db.collection('Users').insertOne({
      //   name:'Vishal Sharai',
      //   age:19,
      //   location:'New Delhi'
      // },(err,result) =>{
      //   if (err) {
      //     return  console.log('Unable to insert todo',err);
      //   }
      //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
      // });


      db.close();
});
