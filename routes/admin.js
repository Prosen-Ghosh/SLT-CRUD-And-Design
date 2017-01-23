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

router.get('/dataEntry/speech',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/speech_view',pageName:'Speech'});
})

router.get('/dataEntry/paragraph',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/paragraph_view',pageName:'Paragraph'});
})

router.get('/makeQuestion/speech',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/speech_question_view',pageName:'Speech Question'});
})

router.get('/makeQuestion/mcq',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/mcq_question_view',pageName:'MCQ Question'});
})

router.get('/makeQuestion/yes_no',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/yes_no_question_view',pageName:'Yes/No Question'});
})

router.get('/makeQuestion/written',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/written_question_view',pageName:'Written Question'});
})

router.get('/dataEntry/interactive_task',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/interactive_task_view',pageName:'Interactive Task'});
})

router.get('/set_new_question',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/set_question_view',pageName:'Questions'});
})

router.get('/suggestions',function(req,res){
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home", includeFile:'pages/suggestions_view',pageName:'Suggestions'});
})
module.exports = router;
