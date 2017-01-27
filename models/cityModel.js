const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getCity : function(queryParams, callback){
    db.query('SELECT * FROM city ci JOIN country co ON ci.country_id = co.country_id ORDER BY co.country_name ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createCity : function(data, callback){
    db.query('INSERT INTO city SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateCity : function(data, callback) {
    db.query('UPDATE city SET city_name = ?, country_id = ? WHERE city_id = ?',[data.city_name,data.country_id,data.city_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  deleteCity : function(data, callback) {
    db.query('DELETE FROM city WHERE city_id = ?',[data.city_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
