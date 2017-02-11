const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getQuestions : function(queryParams, callback){
    db.query('SELECT * FROM questions ORDER BY type ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  createQuestions : function(data, callback){
    db.query('INSERT INTO questions SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateQuestions : function(data, callback) {
    db.query('UPDATE questions SET question_id = ?, type = ?, question_label = ?, problem_category_id = ? WHERE serial_no = ?',[data.question_id,data.type,data.question_label,data.problem_category_id,data.serial_no], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  deleteQuestions : function(data, callback) {
    db.query('DELETE FROM questions WHERE serial_no = ?',[data.serial_no], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
