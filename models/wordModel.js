const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getWord : function(queryParams, callback){
    db.query('SELECT * FROM words ORDER BY word ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createWord: function(data, callback){
    db.query('INSERT INTO words SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  updateWord : function(data, callback) {
    db.query('UPDATE words SET word = ?, description = ?, synonyms = ? WHERE word_id = ?',[data.word,data.description,data.synonyms,data.word_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  deleteWord: function(data, callback) {
    db.query('DELETE FROM words WHERE word_id = ?',[data.word_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
