const mysql = require('mysql');
const db = require('./db');

module.exports.getCountry = function(queryParams, callback) {
  db.query('SELECT * FROM country ORDER BY country_name ASC', function (error, results, fields) {
    if(error){
      console.info(error);
      return;
    }
    callback(false, results);
  });
};

module.exports.createCountry = function(data, callback) {
  db.query('INSERT INTO country SET ?',data, function (error, results, fields) {
    // INSERT INTO country SET `country_id` = 1, `country_name` = 'Bangladesh'
    if(error){
      console.info(error);
      return;
    }
    callback(false, results);
  });
};
