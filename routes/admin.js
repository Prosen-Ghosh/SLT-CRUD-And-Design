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
router.get('/dataEntry/country/api',adminControllers.countryController.api);
router.post('/dataEntry/country',adminControllers.countryController.insert);
router.put('/dataEntry/country',adminControllers.countryController.update);
router.delete('/dataEntry/country',adminControllers.countryController.remove);

router.get('/dataEntry/city',adminControllers.cityController.index);
router.post('/dataEntry/city',adminControllers.cityController.insert);
router.put('/dataEntry/city',adminControllers.cityController.update);
router.delete('/dataEntry/city',adminControllers.cityController.remove);

router.get('/dataEntry/word',adminControllers.wordController.index);
router.post('/dataEntry/word',adminControllers.wordController.insert);
router.put('/dataEntry/word',adminControllers.wordController.update);
router.delete('/dataEntry/word',adminControllers.wordController.remove);

router.get('/dataEntry/image',adminControllers.imageController.index);

router.get('/dataEntry/speech',adminControllers.speechController.index)

router.get('/dataEntry/paragraph',adminControllers.paragraphController.index);
router.post('/dataEntry/paragraph',adminControllers.paragraphController.insert);
router.put('/dataEntry/paragraph',adminControllers.paragraphController.update);
router.delete('/dataEntry/paragraph',adminControllers.paragraphController.remove);

router.get('/makeQuestion/speech',adminControllers.speechQuestionController.index);

router.get('/makeQuestion/mcq',adminControllers.mcqQuestionController.index)

router.get('/makeQuestion/yes_no',adminControllers.yesNoQuestionController.index)

router.get('/makeQuestion/written',adminControllers.writtenQuestionController.index)

router.get('/dataEntry/interactive_task',adminControllers.interactiveTaskController.index)

router.get('/set_new_question',adminControllers.setQuestionController.index)

router.get('/suggestions',adminControllers.suggestionController.index)
module.exports = router;
