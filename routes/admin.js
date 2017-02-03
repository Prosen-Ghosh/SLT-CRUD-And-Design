const express = require('express');
const router = express.Router();
const basePath = process.env.PWD || process.cwd();
const path = require("path");
var multer  = require('multer'); // This module is for image upload
var upload = multer({ dest: './../public/img/userImages/'});
var fileUpload = multer({ dest: './../public/interactive_task/'}); //uploded image path

const adminControllers = require('.././controllers/adminControllers'); // Loding All Admin Controllers
// define the home page route for admin
router.get('/', function (req, res) {
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home",includeFile:'pages/chart_view',pageName:''});
})
// define the profile route for admin
router.get('/profile', function (req, res) {
  res.send(path.normalize(basePath + ' Admin Profile'));
})

// Country Route
router.get('/dataEntry/country',adminControllers.countryController.index);
router.get('/dataEntry/country/api',adminControllers.countryController.api);
router.post('/dataEntry/country',adminControllers.countryController.insert);
router.put('/dataEntry/country',adminControllers.countryController.update);
router.delete('/dataEntry/country',adminControllers.countryController.remove);

// City Route
router.get('/dataEntry/city',adminControllers.cityController.index);
router.post('/dataEntry/city',adminControllers.cityController.insert);
router.put('/dataEntry/city',adminControllers.cityController.update);
router.delete('/dataEntry/city',adminControllers.cityController.remove);

// Word Route
router.get('/dataEntry/word',adminControllers.wordController.index);
router.get('/dataEntry/word/api',adminControllers.wordController.api)
router.post('/dataEntry/word',adminControllers.wordController.insert);
router.put('/dataEntry/word',adminControllers.wordController.update);
router.delete('/dataEntry/word',adminControllers.wordController.remove);

// Image Route
router.get('/dataEntry/image',adminControllers.imageController.index);
router.get('/dataEntry/image/api',adminControllers.imageController.api);
router.post('/dataEntry/image',upload.single('file'),adminControllers.imageController.insert);
router.put('/dataEntry/image',upload.single('file'),adminControllers.imageController.update);
router.delete('/dataEntry/image',adminControllers.imageController.remove);

// Speech Route
router.get('/dataEntry/speech',adminControllers.speechController.index);
router.get('/dataEntry/speech/api',adminControllers.speechController.api);
router.get('/dataEntry/speech/apiForSpechQuestion',adminControllers.speechController.apiForSpechQuestion);
router.post('/dataEntry/speech',adminControllers.speechController.insert);
router.put('/dataEntry/speech',adminControllers.speechController.update);
router.delete('/dataEntry/speech',adminControllers.speechController.remove);

// Paragraph Route
router.get('/dataEntry/paragraph',adminControllers.paragraphController.index);
router.get('/dataEntry/paragraph/api',adminControllers.paragraphController.api);
router.post('/dataEntry/paragraph',adminControllers.paragraphController.insert);
router.put('/dataEntry/paragraph',adminControllers.paragraphController.update);
router.delete('/dataEntry/paragraph',adminControllers.paragraphController.remove);

// Route For Speech Question
router.get('/makeQuestion/speech',adminControllers.speechQuestionController.index);
router.post('/makeQuestion/speech',adminControllers.speechQuestionController.insert);
router.put('/makeQuestion/speech',adminControllers.speechQuestionController.update);
router.delete('/makeQuestion/speech',adminControllers.speechQuestionController.remove);

// Yes/No Quesions route
router.get('/makeQuestion/yes_no',adminControllers.yesNoQuestionController.index);
router.post('/makeQuestion/yes_no',adminControllers.yesNoQuestionController.insert);
router.put('/makeQuestion/yes_no',adminControllers.yesNoQuestionController.update);
router.delete('/makeQuestion/yes_no',adminControllers.yesNoQuestionController.remove)

//Route For Written Questions
router.get('/makeQuestion/written',adminControllers.writtenQuestionController.index);
router.post('/makeQuestion/written',adminControllers.writtenQuestionController.insert);
router.put('/makeQuestion/written',adminControllers.writtenQuestionController.update);
router.delete('/makeQuestion/written',adminControllers.writtenQuestionController.remove);

// Route For interactive task
router.get('/dataEntry/interactive_task',adminControllers.interactiveTaskController.index);
router.post('/dataEntry/interactive_task',fileUpload.single('file'),adminControllers.interactiveTaskController.insert);
router.put('/dataEntry/interactive_task',adminControllers.interactiveTaskController.update);
router.delete('/dataEntry/interactive_task',adminControllers.interactiveTaskController.remove);

router.get('/set_new_question',adminControllers.setQuestionController.index)

// Route Suggestions
router.get('/suggestions',adminControllers.suggestionController.index);
router.delete('/suggestions',adminControllers.suggestionController.remove);

module.exports = router;
