const User = require('../models/user');
var express = require('express');
var passport = require('passport');
var router = express.Router();
var authController = require('../controllers/authController')

router.post("/login", passport.authenticate("local") ,  authController.login)
router.post("/register", authController.register)

module.exports = router