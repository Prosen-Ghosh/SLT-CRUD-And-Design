const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getSpeech : function(queryParams, callback){
    db.query('SELECT * FROM speech', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  getSpechDetailsForQuestions : function(queryParams,cb){
    db.query(
      'SELECT * FROM speech s left join words w on s.content_id = w.word_id and s.speech_type = w.type left JOIN image i on s.content_id = i.image_id and s.speech_type = i.type left join paragraph p on s.content_id = p.paragraph_id and s.speech_type = p.type'
    ,function(err,results,fields){
      if(err){
        console.info(err);
        return;
      }
      cb(false,results);
    });
  },
  createSpeech : function(data, callback){
    db.query('INSERT INTO speech SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateSpeech : function(data, callback) {
    console.log(data);
    db.query('UPDATE speech SET content_id = ?, speech_type = ?, hint = ? WHERE speech_id = ?',[data.content_id,data.speech_type,data.hint,data.speech_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  deleteSpeech : function(data, callback) {
    db.query('DELETE FROM speech WHERE speech_id = ?',[data.speech_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
