// City Controller
const basePath = process.env.PWD || process.cwd();
const path = require("path");
//const patientData = require('./../../models/patientModel');
const patientController = require('./patientController');
const therapistController = require('./therapistController');
module.exports = {

  index : function(req,res,next){
    let data = {
      title : "Index"
    }
    res.status(200);
    res.render(path.normalize(basePath + '/views/index'), data);
  },

  signup : function(req,res,next){
    let data = {
      title : "Sign Up",
      currentYear : new Date().getFullYear(),
      month : ["January","February","March","April","May","June","July","August","September","October","November","December"]
    }
    res.render(path.normalize(basePath + '/views/userViews/signup'), data);
  },
  insert : function(req,res,next){
    let data = {
      title : "Sign Up",
      currentYear : new Date().getFullYear(),
      month : ["January","February","March","April","May","June","July","August","September","October","November","December"]
    }
    if(req.body.whoAmI === "Therapist"){
      therapistController.insert(req,res,next);
    }
    else if(req.body.whoAmI === "Patient"){
      patientController.insert(req,res,next);
    }
    else {
      res.status(302);
      res.render(path.normalize(basePath + '/views/index'), data);
    }
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
