// Country Controller
const basePath = process.env.PWD || process.cwd();
const path = require("path");

const countryData = require('./../../models/countryModel');

module.exports = {
  index : function(req,res,next){
    countryData.getCountry('', function(err, record) {
      let data = {
        title : "Admin Home",
        includeFile : 'pages/country_view',
        pageName : 'Countrys',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"), data);
    });
  },
  insert : function(req,res,next){
    let countryInfo = {
      country_id : null,
      country_name : req.body.country
    }
    countryData.createCountry(countryInfo,function(err,record){

      res.redirect('/admin/dataEntry/country');
    });
  }
}
