const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getParagraph : function(queryParams, callback){
    db.query('SELECT * FROM paragraph ORDER BY paragraph_title ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createParagraph : function(data, callback){
    db.query('INSERT INTO paragraph SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateParagraph : function(data, callback) {
    db.query('UPDATE paragraph SET paragraph_title = ?, paragraph = ?, description = ? WHERE paragraph_id = ?',[data.paragraph_title,data.paragraph,data.description,data.paragraph_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  deleteParagraph : function(data, callback) {
    db.query('DELETE FROM paragraph WHERE paragraph_id = ?',[data.paragraph_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
