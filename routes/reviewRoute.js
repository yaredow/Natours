const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
} = require('../controllers/reviewController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.route('/').get(protect, getAllReviews);
router.route('/:id').get(protect, getReview);

router.route('/').post(createReview);

module.exports = router;
