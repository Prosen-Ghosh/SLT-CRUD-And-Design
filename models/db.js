const mysql = require('mysql');
const config = require('./config');
var connection = mysql.createConnection(config);

connection.connect(function(err) {
  console.info('connection create');
    if (err) throw err;
});
console.info('connection page loaded');
module.exports = connection;
