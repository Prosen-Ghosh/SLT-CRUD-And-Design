// Written Questions Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const writtenQuestionData = require('./../../models/writtenQuestionModel');
module.exports = {

  index : function(req,res,next){
    writtenQuestionData.getWrittenQuestion('',function(err,record){
      let data = {
        title:"Admin Home",
        includeFile:'pages/written_question_view',
        pageName:'Written Questions',
        databaseData : record
      }
      res.status(200);
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);;
    });
  },
  api : function(req,res,next){
    writtenQuestionData.getWord('',function(err,record){
      res.status(200);
      res.send(record);
    });
  },
  insert : function(req,res,next){
    let writtenQuestionInfo = {
      written_question_id : null,
      question_title : req.body.question_title,
      content_id : req.body.content_id,
      answer : req.body.answer
    }
    writtenQuestionData.createWrittenQuestion(writtenQuestionInfo, function(err,record){
      res.redirect('/admin/makeQuestion/written');
    })
  },
  update : function(req,res,next){
    let writtenQuestionInfo = {
      written_question_id : req.body.written_question_id,
      question_title : req.body.question_title,
      content_id : req.body.content_id,
      answer : req.body.answer
    }
    writtenQuestionData.updateWrittenQuestion(writtenQuestionInfo, function(err,record){
      res.redirect('/admin/makeQuestion/written');
    });
  },

  remove : function(req,res,next){
    let writtenQuestionInfo = {
      written_question_id : req.body.written_question_id
    }
    writtenQuestionData.deleteWrittenQuestion(writtenQuestionInfo, function(err,record){
      res.redirect('/admin/makeQuestion/written');
    });
  }
}
