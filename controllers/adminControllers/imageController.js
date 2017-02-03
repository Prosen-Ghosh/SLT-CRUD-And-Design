// Image Controller

const basePath = process.env.PWD || process.cwd();
const path = require("path");
const imageData = require('./../../models/imageModel');
const fs = require('fs');
const util = require('util');

module.exports = {

  index : function(req,res,next){
    imageData.getImage('',function(err,record){
      let data = {
        title:"Admin Home",
        includeFile:'pages/image_view',
        pageName:'Images',
        databaseData : record
      }
      res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),data);
    });
  },

  api : function(req,res,next){
    imageData.getImage('',function(err,record){
      res.status(200);
      res.send(record);
    });
  },

  insert : function(req,res,next){
    imageData.getImageNames(req.body.image_name,function(err,record){

      var num = 0;
      if(record != null && record != ''){
        var nameExist = record[record.length-1].image_path;
        if(nameExist != '' || nameExist != null)num = nameExist.match(/[0-9]/g).join('');
      }
      num++;
      var file = basePath + '/public/img/userImages/' + req.body.image_name + num +'.jpg';
      fs.rename(req.file.path, file, function(err) {
        if (err) {
          console.log(err);
        } else {
          let imageInfo = {
            image_id : null,
            type : "Image",
            image_name : req.body.image_name,
            image_path : req.body.image_name + num +'.jpg',
            description : req.body.description
          }
          imageData.createImage(imageInfo,function(err,record){
            res.status(201);
            res.redirect('/admin/dataEntry/image');
          });
        }
      });
    });
  },

  update : function(req,res,next){
    imageData.getImageNames(req.body.image_name,function(err,record){

      var num = 0;
      if(record != null && record != ''){
        var nameExist = record[record.length-1].image_path;
        if(nameExist != '' || nameExist != null)num = nameExist.match(/[0-9]/g).join('');
      }
      num++;
      var file = basePath + '/public/img/userImages/' + req.body.image_name + num +'.jpg';
      console.log(req + " Path--");
      fs.rename(req.file1.path, file);
      let imageInfo = {
        image_id : req.body.image_id,
        type: "Image",
        image_name : req.body.image_name,
        image_path : req.body.image_name + num +'.jpg',
        description : req.body.description
      }
      imageData.updateImage(imageInfo,function(err,record){
        res.redirect('/admin/dataEntry/image');
      });

    });
  },

  remove : function(req,res,next){
    let imageInfo = {
      image_id : req.body.image_id
    }
    imageData.deleteImage(imageInfo,function(){
      res.redirect('/admin/dataEntry/image');
    });
  }
}
