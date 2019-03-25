const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'yousuf',
    password: '123456',
    database: 'my_database'
});

//mysqlConnection.connect();





// var createTable = () => {
//     mysqlConnection.query(" CREATE TABLE Contact( ID INT AUTO_INCREMENT ,Name VARCHAR(20) NOT NULL,Phone VARCHAR(25), PRIMARY KEY(ID))", (error, results, fields) => {
//         if (error) throw error;
//         console.log('Contact Table has been created ');
//     });
// }

//createTable();
module.exports = mysqlConnection;

//connection.end();