const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();
// authController.isLoggedIn,
router.use(authController.isLoggedIn);

router.get('/', viewsController.getOverview);
router.get('/tour/:slug', viewsController.getTour);
router.get('/login', viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/me/reviews', authController.protect, viewsController.getUserReviews);

router.post('/submit-user-data', authController.protect, viewsController.updateUserData);

module.exports = router;
