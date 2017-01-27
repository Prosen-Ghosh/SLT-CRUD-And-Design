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

module.exports.updateCountry = function(data, callback) {
  db.query('UPDATE country SET country_name = ? WHERE country_id = ?',[data.country_name,data.country_id], function (error, results, fields) {
    if(error){
      console.info(error);
      return;
    }
    callback(false, results);
  });
};

module.exports.deleteCountry = function(data, callback) {
  db.query('DELETE FROM country WHERE country_id = ?',[data.country_id], function (error, results, fields) {
    if(error){
      console.info(error);
      return;
    }
    callback(false, results);
  });
};

module.exports.getCountryName = function(queryParams, callback) {
  db.query('SELECT * FROM country ORDER BY country_name ASC', function (error, results, fields) {
    if(error){
      console.info(error);
      return;
    }
    callback(false, results);
  });
};
