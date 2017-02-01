// Speech Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const speechData = require('./../../models/speechModel');

module.exports = {
  index : function(req,res,next){
    speechData.getSpeech('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/speech_view',
        pageName : 'Speechs',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    })
  },
  api : function(req,res,next){
    speechData.getSpeech('',function(err,record){
      res.status(200);
      res.send(record);
    });
  },
  insert : function(req,res,next){
    let speechInfo = {
      speech_id : null,
      content_id : req.body.content_id,
      speech_type : req.body.speech_type,
      hint : req.body.hint
    }
    speechData.createSpeech(speechInfo,function(err,record){
      res.redirect('/admin/dataEntry/speech');
    });
  },

  update : function(req,res,next){
    let speechInfo = {
      speech_id : req.body.speech_id,
      content_id : req.body.content_id,
      speech_type : req.body.speech_type,
      hint : req.body.hint
    }
    speechData.updateSpeech(speechInfo,function(err,record){
      res.redirect('/admin/dataEntry/speech');
    });
  },

  remove : function(req,res,next){
    let speechInfo = {
      speech_id : req.body.speech_id
    }
    speechData.deleteSpeech(speechInfo,function(err,record){
      res.redirect('/admin/dataEntry/speech');
    });
  }
}
