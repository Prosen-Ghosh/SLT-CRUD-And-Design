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
