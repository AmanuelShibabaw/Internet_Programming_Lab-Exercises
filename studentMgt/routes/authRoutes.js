const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
router.post('/register',authController.Register)
router.post('/login',authController.Login)
module.exports = router