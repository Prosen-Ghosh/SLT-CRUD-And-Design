// Paragraph Controller
const basePath = process.env.PWD || process.cwd();
const path = require("path");
const paragraphData = require('./../../models/paragraphModel');

module.exports = {

  index : function(req,res,next){
    paragraphData.getParagraph('',function(err,record){
      let data = {
        title : "Admin Home",
        includeFile : 'pages/paragraph_view',
        pageName : 'Paragraphs',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },
  api : function(req,res,next){
      paragraphData.getParagraph('',function(err,record){
      res.status(200);
      res.send(record);
    });
  },
  insert : function(req,res,next){
    let paragraphInfo = {
      paragraph_id : null,
      paragraph_title : req.body.paragraph_title,
      paragraph : req.body.paragraph,
      description : req.body.description
    }
    paragraphData.createParagraph(paragraphInfo, function(err,record){
      res.redirect('/admin/dataEntry/paragraph');
    })
  },

  update : function(req,res,next){
    let paragraphInfo = {
      paragraph_id : req.body.paragraph_id,
      paragraph_title : req.body.paragraph_title,
      paragraph : req.body.paragraph,
      description : req.body.description
    }
    paragraphData.updateParagraph(paragraphInfo, function(err,record){
      res.redirect('/admin/dataEntry/paragraph');
    });
  },

  remove : function(req,res,next){
    let paragraphInfo = {
      paragraph_id : req.body.paragraph_id
    }
    console.log(paragraphInfo);
    paragraphData.deleteParagraph(paragraphInfo, function(err,record){
      res.redirect('/admin/dataEntry/paragraph');
    });
  }
}
