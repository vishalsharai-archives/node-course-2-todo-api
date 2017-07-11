const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
      if (err) {
        return console.log('Unable to connect to the MongoDB server');
      }
      console.log('Connected to mongodb Server');

//findOneAndUpdate

// db.collection('Todos').findOneAndUpdate({
// _id: new ObjectID('5963c56aa793f169fd4a3eaa')
// },
// { $set:{
//    completed: false
//  }},{
//    returnOriginal: false
//  }
// ).then((result)=>{
// console.log(result.value);
// });

db.collection('Users').findOneAndUpdate({
  name:'Vishal'
},{
  $set:{
      name:'Vishal Sharai'
},$inc:{
      age:19
}
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});

      // db.close();
});
