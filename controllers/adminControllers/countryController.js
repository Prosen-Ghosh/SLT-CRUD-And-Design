// Country Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");

const countryData = require('./../../models/countryModel');

module.exports = {
  index : function(req,res,next){
    let data = {
      title:"Admin Home",
      includeFile:'pages/country_view',
      pageName:'Countrys',
      databaseData:countryData.databaseResult
    }
    //console.log(countryData.databaseResult[0].country_name);
    res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
  }
}
