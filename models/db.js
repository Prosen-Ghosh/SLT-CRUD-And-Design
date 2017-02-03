const mysql = require('mysql');
var connection = mysql.createConnection({
  connectionLimit : 100,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'slt'
});

connection.connect(function(err) {
  console.info('connection create');
    if (err) throw err;
});
console.info('connection page loaded');
module.exports = connection;
