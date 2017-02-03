const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getSeggestions : function(queryParams, callback){
    // Working on this query
    db.query('SELECT * FROM suggestion s JOIN therapist t ON s.therapist_user_name = t.user_name ORDER BY s.suggestion_serial_no DESC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },
  deleteSuggestion: function(data, callback) {
    db.query('DELETE FROM suggestion WHERE suggestion_serial_no = ?',[data.suggestion_serial_no], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
