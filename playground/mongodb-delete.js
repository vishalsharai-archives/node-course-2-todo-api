const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
      if (err) {
        return console.log('Unable to connect to the MongoDB server');
      }
      console.log('Connected to mongodb Server');

//Delete many
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // });

//delete one
  db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
    console.log(result);
  });

//findOne and delete
  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').deleteMany({name:'Vishal Sharai'}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({name: 'Vishal'}).then((result)=>{
    console.log(result);
  });


      // db.close();
});
