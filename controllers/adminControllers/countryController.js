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
      res.status(200);
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"), data);
    });
  },
  api : function(req,res,next){
    countryData.getCountryName('', function(err, record) {
      res.status(200);
      res.send(record);
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
  },
  update : function(req,res,next){
    let countryInfo = {
      country_id : req.body.country_id,
      country_name : req.body.country_name
    }
    countryData.updateCountry(countryInfo,function(err,record){
      res.status(204);
      res.redirect('/admin/dataEntry/country');
    });
  },
  remove : function(req,res,next){
    let countryInfo = {
      country_id : req.body.country_id
    }
    console.log(countryInfo);
    countryData.deleteCountry(countryInfo,function(err,record){
      res.redirect('/admin/dataEntry/country');
    });
  }
}
