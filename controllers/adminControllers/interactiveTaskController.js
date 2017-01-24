// Interactive Task Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");

module.exports = {
  index : function(req,res,next){
    let data = {
      title:"Admin Home",
      includeFile:'pages/interactive_task_view',
      pageName:'Interactive Tasks'
    }
    res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
  }
}
