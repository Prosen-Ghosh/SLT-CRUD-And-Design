// Country Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const wordData = require('./../../models/wordModel');

module.exports = {
  index : function(req,res,next){
    wordData.getWord('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/word_view',
        pageName : 'Words',
        databaseData : record
      }
      res.status(200);
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },
  insert : function(req,res,next){
    let wordInfo = {
      word_id : null,
      word : req.body.word,
      description : req.body.description,
      synonyms : req.body.synonyms
    }
    wordData.createWord(wordInfo, function(err,record){
      res.redirect('/admin/dataEntry/word');
    })
  },
  update : function(req,res,next){
    let wordInfo = {
      word_id : req.body.word_id,
      word : req.body.word,
      description : req.body.description,
      synonyms : req.body.synonyms
    }

    wordData.updateWord(wordInfo, function(err,record){
      res.redirect('/admin/dataEntry/word');
    });
  },

  remove : function(req,res,next){
    let wordInfo = {
      word_id : req.body.word_id
    }
    console.log(wordInfo);
    wordData.deleteWord(wordInfo, function(err,record){
      res.redirect('/admin/dataEntry/word');
    });
  }
}
