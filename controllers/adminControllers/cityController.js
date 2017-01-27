// City Controller
const basePath = process.env.PWD || process.cwd();
const path = require("path");
const cityData = require('./../../models/cityModel');

module.exports = {
  index : function(req,res,next){
    cityData.getCity('', function(err, record) {
      let data = {
        title : "Admin Home",
        includeFile : 'pages/city_view',
        pageName : 'Citys',
        databaseData : record
      }
      res.status(200);
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"), data);
    });
  },
  insert : function(req,res,next){
    let cityInfo = {
      city_id : null,
      city_name : req.body.city_name,
      country_id : req.body.country_id
    }
    console.log(cityInfo);
    cityData.createCity(cityInfo,function(err,record){

      res.redirect('/admin/dataEntry/city');
    });
  },
}
