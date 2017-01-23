const express = require('express');
const router = express.Router();
const basePath = process.env.PWD || process.cwd();
const path = require("path");

// define the home page route for admin
router.get('/', function (req, res) {
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home",includeFile:'pages/chart_view',pageName:''});
})
// define the profile route for admin
router.get('/profile', function (req, res) {
  res.send(path.normalize(basePath + ' Admin Profile'));
})

router.get('/dataEntry/country',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/country_view',pageName:'Country'});
})

router.get('/dataEntry/city',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/city_view',pageName:'City'});
})

router.get('/dataEntry/word',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/word_view',pageName:'Word'});
})

router.get('/dataEntry/image',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/image_view',pageName:'Image'});
})
module.exports = router;
