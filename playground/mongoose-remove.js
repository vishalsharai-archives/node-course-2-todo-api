const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='5964c85116e84f683d062f18';

Todo.remove({}).then((result) => {
  console.log(result);
});
