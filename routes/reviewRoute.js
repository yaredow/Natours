const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require('../controllers/reviewController');
const { protect } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.route('/').get(protect, getAllReviews);
router.route('/:id').get(protect, getReview);

router.route('/').post(protect, createReview);
router.route('/:id').patch(protect, updateReview).delete(deleteReview);

module.exports = router;
