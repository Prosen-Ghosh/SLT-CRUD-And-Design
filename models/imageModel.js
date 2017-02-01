const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getImage : function(queryParams, callback){
    db.query('SELECT * FROM image ORDER BY image_name ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  getImageNames : function(name, callback){
    db.query('SELECT * FROM image where image_name LIKE ? ORDER BY image_name DESC',[name], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      console.log(results);
      callback(false, results);
    });
  },
  createImage : function(data, callback){
    db.query('INSERT INTO image SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateImage : function(data, callback) {
    db.query('UPDATE image SET image_name = ?, image_path = ?, description = ? WHERE image_id = ?',[data.image_name,data.image_path,data.description,data.image_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  deleteImage : function(data, callback) {
    db.query('DELETE FROM image WHERE image_id = ?',[data.image_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
