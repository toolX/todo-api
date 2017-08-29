var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://toolX:!QAZ2wsx@ds153853.mlab.com:53853/db-for-node-todo-app'
};
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
