// Suggestion Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");

module.exports = {
  index : function(req,res,next){
    let data = {
      title:"Admin Home",
      includeFile:'pages/suggestions_view',
      pageName:'Suggestions'
    }
    res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
  }
}
