// City Controller
const basePath = process.env.PWD || process.cwd();
const path = require("path");
const patientData = require('./../../models/patientModel');

module.exports = {

  /*index : function(req,res,next){
    patientData.getPatients('', function(err, record) {
      let data = {
        title : "Admin Home",
        includeFile : 'pages/city_view',
        pageName : 'Citys',
        databaseData : record
      }
      res.status(200);
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"), data);
    });
  },*/

  insert : function(req,res,next){
    let patientInfo = {
      serial_no : null,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      user_name : req.body.username,
      password : req.body.password,
      email : req.body.email,
      birth_date : req.body.year + "-" + req.body.month + "-" + req.body.day,
      address: req.body.country + " " + req.body.city,
      picture : null,
      problem_category_id : req.body.problem_category_id,
      personal_information : null,
      label : 0,
      score : 0
    }
    console.log(patientInfo);
    patientData.createPatient(patientInfo,function(err,record){
      res.redirect('/');
    });
  },

  update : function(req,res,next){
    let cityInfo = {
      city_id : req.body.city_id,
      city_name : req.body.city_name,
      country_id : req.body.country_id
    }
    patientData.updateCity(cityInfo,function(err,record){
      res.status(204);
      res.redirect('/admin/dataEntry/city');
    });
  },
  remove : function(req,res,next){
    let cityInfo = {
      city_id : req.body.city_id
    }
    console.log(cityInfo);
    patientData.deleteCity(cityInfo,function(err,record){
      res.status(204);
      res.redirect('/admin/dataEntry/city');
    });
  }
}
