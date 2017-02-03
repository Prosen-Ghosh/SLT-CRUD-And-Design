// Country Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const speechQuestionData = require('./../../models/speechQuestionModel');

module.exports = {

  index : function(req,res,next){
    speechQuestionData.getSpeechQuestion('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/speech_question_view',
        pageName : 'Speech Questions',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    })
  },
  api : function(req,res,next){
    speechQuestionData.getSpeechQuestion('',function(err,record){
      res.status(200);
      res.send(record);
    });
  },
  insert : function(req,res,next){
    let speechQuestionInfo = {
      speech_question_id : null,
      question_title : req.body.question_title,
      speech_id : req.body.speech_id,
      min_score : req.body.min_score
    }
    speechQuestionData.createSpeechQuestion(speechInfo,function(err,record){
      res.redirect('/admin/makeQuestion/speech');
    });
  },

  update : function(req,res,next){
    let speechQuestionInfo = {
      speech_question_id : req.body.speech_question_id,
      question_title : req.body.question_title,
      speech_id : req.body.speech_id,
      min_score : req.body.min_score
    }
    speechQuestionData.updateSpeechQuestion(speechQuestionInfo,function(err,record){
      res.redirect('/admin/makeQuestion/speech');
    });
  },

  remove : function(req,res,next){
    let speechQuestionInfo = {
      speech_question_id : req.body.speech_question_id
    }
    speechQuestionData.deleteSpeechQuestion(speechQuestionInfo,function(err,record){
      res.redirect('/admin/makeQuestion/speech');
    });
  }
}
