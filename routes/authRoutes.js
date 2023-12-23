const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require('../controllers/authController.js');
const auth = require('../middlewares/auth.js');

//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', auth.isAuthenticated, userProfile);

module.exports = router;