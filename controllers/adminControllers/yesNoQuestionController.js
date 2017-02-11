// Yes/No Questions Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const yesNoQuestionsData = require('./../../models/yesNoQuestionsModel');

module.exports = {
  index : function(req,res,next){
    yesNoQuestionsData.getYesNoQuestions('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/yes_no_question_view',
        pageName : 'Paragraphs',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },
  api : function(req,res,next){
    yesNoQuestionsData.getYesNoQuestions('',function(err,record){
      res.status(200);
      res.send(record);
    });
  },
  insert : function(req,res,next){
    let yesNoQuestionInfo = {
      question_id : null,
      question_title : req.body.question_title,
      question : req.body.question,
      answer : req.body.answer
    }
    yesNoQuestionsData.createYesNoQuestions(yesNoQuestionInfo, function(err,record){
      res.redirect('/admin/makeQuestion/yes_no');
    })
  },

  update : function(req,res,next){
    let yesNoQuestionInfo = {
      question_id : req.body.question_id,
      question_title : req.body.question_title,
      question : req.body.question,
      answer : req.body.answer
    }
    console.log(yesNoQuestionInfo);
    yesNoQuestionsData.updateYesNoQuestions(yesNoQuestionInfo, function(err,record){
      res.redirect('/admin/makeQuestion/yes_no');
    });
  },

  remove : function(req,res,next){
    let yesNoQuestionInfo = {
      question_id : req.body.question_id
    }
    yesNoQuestionsData.deleteYesNoQuestions(yesNoQuestionInfo, function(err,record){
      res.redirect('/admin/makeQuestion/yes_no');
    });
  }
}
