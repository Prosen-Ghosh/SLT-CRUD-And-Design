const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getYesNoQuestions : function(queryParams, callback){
    db.query('SELECT * FROM yes_no_question ORDER BY question_title ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  createYesNoQuestions : function(data, callback){
    db.query('INSERT INTO yes_no_question SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateYesNoQuestions : function(data, callback) {
    db.query('UPDATE yes_no_question SET question_title = ?, question = ?, answer = ? WHERE question_id = ?',[data.question_title,data.question,data.answer,data.question_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  deleteYesNoQuestions : function(data, callback) {
    db.query('DELETE FROM yes_no_question WHERE question_id = ?',[data.question_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
