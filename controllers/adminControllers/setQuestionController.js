// Set Questions Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const setQuestionData = require('./../../models/questionsModel');

module.exports = {
  index : function(req,res,next){
    setQuestionData.getQuestions('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/set_question_view',
        pageName : 'Set Questions',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },
  insert : function(req,res,next){
    let questionInfo = {
      serial_no:null,
      question_id : req.body.question_id,
      type : req.body.type,
      question_label : req.body.question_label,
      problem_category_id : req.body.problem_category_id
    }
    setQuestionData.createQuestions(questionInfo,function(err,record){
      res.redirect('/admin/set_new_question');
    });
  },
  update : function(req,res,next){
    let questionInfo = {
      serial_no:req.body.serial_no,
      question_id : req.body.question_id,
      type : req.body.type,
      question_label : req.body.question_label,
      problem_category_id : req.body.problem_category_id
    }
    setQuestionData.updateQuestions(questionInfo,function(err,record){
      res.redirect('/admin/set_new_question');
    });
  },
  remove : function(req,res,next){
    let questionInfo = {
      serial_no:req.body.serial_no
    }
    setQuestionData.deleteQuestions(questionInfo,function(err,record){
      res.redirect('/admin/set_new_question');
    });
  }
}
