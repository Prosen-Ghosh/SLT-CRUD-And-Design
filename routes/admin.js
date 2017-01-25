const express = require('express');
const router = express.Router();
const basePath = process.env.PWD || process.cwd();
const path = require("path");

const adminControllers = require('.././controllers/adminControllers'); // Loding All Admin Controllers
// define the home page route for admin
router.get('/', function (req, res) {
  res.render(path.normalize(basePath + "/views/adminViews/admin_panel_view"),{title:"Admin Home",includeFile:'pages/chart_view',pageName:''});
})
// define the profile route for admin
router.get('/profile', function (req, res) {
  res.send(path.normalize(basePath + ' Admin Profile'));
})

router.get('/dataEntry/country',adminControllers.countryController.index);
router.post('/dataEntry/country',adminControllers.countryController.insert);

router.get('/dataEntry/city',adminControllers.cityController.index);

router.get('/dataEntry/word',adminControllers.wordController.index)

router.get('/dataEntry/image',adminControllers.imageController.index);

router.get('/dataEntry/speech',adminControllers.speechController.index)

router.get('/dataEntry/paragraph',adminControllers.paragraphController.index)

router.get('/makeQuestion/speech',adminControllers.speechQuestionController.index);

router.get('/makeQuestion/mcq',adminControllers.mcqQuestionController.index)

router.get('/makeQuestion/yes_no',adminControllers.yesNoQuestionController.index)

router.get('/makeQuestion/written',adminControllers.writtenQuestionController.index)

router.get('/dataEntry/interactive_task',adminControllers.interactiveTaskController.index)

router.get('/set_new_question',adminControllers.setQuestionController.index)

router.get('/suggestions',adminControllers.suggestionController.index)
module.exports = router;
