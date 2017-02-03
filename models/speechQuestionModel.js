const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getSpeechQuestion : function(queryParams, callback){
    db.query('SELECT * FROM speech_question', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createSpeechQuestion : function(data, callback){
    db.query('INSERT INTO speech_question SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateSpeechQuestion: function(data, callback) {
    console.log(data);
    db.query('UPDATE speech_question SET question_title = ?, speech_id = ?, min_score = ? WHERE speech_question_id = ?',[data.question_title,data.speech_id,data.min_score,data.speech_question_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  deleteSpeechQuestion: function(data, callback) {
    db.query('DELETE FROM speech_question WHERE speech_question_id = ?',[data.speech_question_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
