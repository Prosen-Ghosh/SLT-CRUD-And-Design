// Suggestion Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const suggestionData = require('./../../models/suggestionModel');
module.exports = {

  index : function(req,res,next){
    suggestionData.getSeggestions('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/suggestions_view',
        pageName : 'Suggestions',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },
  remove : function(req,res,next){
    let suggestionInfo = {
      suggestion_serial_no : req.body.suggestion_serial_no
    }
    suggestionData.deleteSuggestion(suggestionInfo,function(err,record){
      res.redirect('/admin/suggestions');
    });
  }
}
