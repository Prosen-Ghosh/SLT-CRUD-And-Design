const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getPatients : function(queryParams, callback){
    db.query('SELECT * FROM therapist', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createTherapist : function(data, callback){
    db.query('INSERT INTO therapist SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updatePatient : function(data, callback) {
    db.query('UPDATE therapist SET city_name = ?, country_id = ? WHERE user_name = ?',[data.city_name,data.country_id,data.user_name], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  deletePatient : function(data, callback) {
    db.query('DELETE FROM therapist WHERE user_name = ?',[data.user_name], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
