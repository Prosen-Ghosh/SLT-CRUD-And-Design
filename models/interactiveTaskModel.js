const mysql = require('mysql');
const db = require('./db');

module.exports = {

  getInteractiveTask : function(queryParams, callback){
    db.query('SELECT * FROM interactive_task ORDER BY interactive_task_title ASC', function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  createInteractiveTask : function(data, callback){
    db.query('INSERT INTO interactive_task SET ?',data, function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      console.log(data);
      callback(false, results);
    });
  },

  updateInteractiveTask : function(data, callback) {
    db.query('UPDATE interactive_task SET interactive_task_title = ?, description = ?, min_score = ? WHERE interactive_task_id = ?',[data.interactive_task_title,data.description,data.min_score,data.interactive_task_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  },

  deleteInteractiveTask : function(data, callback) {
    db.query('DELETE FROM interactive_task WHERE interactive_task_id = ?',[data.interactive_task_id], function (error, results, fields) {
      if(error){
        console.info(error);
        return;
      }
      callback(false, results);
    });
  }
}
