// Interactive Task Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const interactiveTaskData = require('./../../models/interactiveTaskModel');
const fs = require('fs');

module.exports = {

  index : function(req,res,next){
    interactiveTaskData.getInteractiveTask('',function(err,record){
      let data = {
        title:"Admin Home",
        includeFile:'pages/interactive_task_view',
        pageName:'Interactive Tasks',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },

  insert : function(req,res,next){
    var file = basePath + '/public/interactive_task/' + req.body.interactive_task_title +'.js';
    console.log('ai to');
    let interactiveTaskInfo = {
      interactive_task_id : null,
      interactive_task_path : 'public/interactive_task/'+req.body.interactive_task_title + '.js',
      interactive_task_title : req.body.interactive_task_title,
      description : req.body.description,
      min_score : req.body.min_score
    }
    console.log(interactiveTaskInfo);
    interactiveTaskData.createInteractiveTask(interactiveTaskInfo, function(err,record){
      res.redirect('/admin/dataEntry/interactive_task');
    });
  },

  update : function(req,res,next){
    let interactiveTaskInfo = {
      interactive_task_id : req.body.interactive_task_id,
      interactive_task_path : req.body.interactive_task_path,
      interactive_task_title : req.body.interactive_task_title,
      description : req.body.description,
      min_score : req.body.min_score
    }
    interactiveTaskData.updateInteractiveTask(interactiveTaskInfo, function(err,record){
      res.redirect('/admin/dataEntry/interactive_task');
    });
  },

  remove : function(req,res,next){
    let interactiveTaskInfo = {
      interactive_task_id : req.body.interactive_task_id
    }
    interactiveTaskData.deleteInteractiveTask(interactiveTaskInfo, function(err,record){
      res.redirect('/admin/dataEntry/interactive_task');
    });
  }
}
