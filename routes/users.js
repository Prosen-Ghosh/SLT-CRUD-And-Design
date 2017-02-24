const express = require('express');
const router = express.Router();
const basePath = process.env.PWD || process.cwd();
const path = require("path");

const userControllers = require('.././controllers/userControllers');

router.get('/', userControllers.usersController.index);
router.get('/signup', userControllers.usersController.signup);
router.post('/signup',userControllers.usersController.insert);

module.exports = router;
