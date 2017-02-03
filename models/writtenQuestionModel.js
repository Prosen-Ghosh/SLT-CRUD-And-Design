const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getWrittenQuestion : function(queryParams, callback){
    db.query('SELECT * FROM written_question ORDER BY question_title ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createWrittenQuestion: function(data, callback){
    db.query('INSERT INTO written_question SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateWrittenQuestion : function(data, callback) {
    db.query('UPDATE written_question SET question_title = ?, content_id = ?, answer = ? WHERE written_question_id = ?',[data.question_title,data.content_id,data.answer,data.written_question_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  deleteWrittenQuestion: function(data, callback) {
    db.query('DELETE FROM written_question WHERE written_question_id = ?',[data.written_question_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
