const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail(),
    body('password').isLength({min: 6})
], 
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({min: 6})
], 
    userController.loginUser
)

module.exports = router;