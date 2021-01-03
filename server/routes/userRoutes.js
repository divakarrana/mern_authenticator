const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/admin-login', authController.adminLogin);
router.get('/listUsers', authController.protect, userController.listUsers);

module.exports = router;
