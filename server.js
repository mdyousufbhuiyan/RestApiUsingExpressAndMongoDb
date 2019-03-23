const express = require('express');
const contectRouter = require('./Api/Route/contect')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongo = require('mongodb');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myApp');
const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
})

db.once('open', () => {
  console.log('Database Connected');

})

const app = express();
const port = 3000;
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/user/contect', contectRouter)





//.............my sql connecton.............................

var mySql = require('mysql');
var mysqlConnection = mySql.createConnection({
  host: 'localhost',
  user: 'yousuf',
  password: '123456',
  database: 'my_database'

})

mysqlConnection.connect();






app.listen(port, () => {
  console.log(`server is running on port ${port}`);

})