const express = require('express');
const router = express.Router();
const registerUser = require('./register.userController');
const loginUser = require('./login.userController');
const meUsers = require('./me.userController');
const { checkToken } = require('../../middlewares/jwt');


router.post('/register', registerUser.service)
router.post('/login', loginUser.service)
router.get('/me', checkToken, meUsers.service)

module.exports = router;