const mysql = require('mysql');
const config = require('./config');

console.log(config);
var connection = mysql.createConnection(config);
connection.connect();


connection.query('SELECT * FROM country', function (error, results, fields) {
  //if (error) throw error;
  var databaseResult = null;
  //console.log('The solution is: ', results[0]);
  module.exports.databaseResult = results;
});
connection.end();
