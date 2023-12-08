const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
} = require('../controllers/reviewController');
const { protect } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(protect, getAllReviews)
  .post(protect, setTourUserIds, createReview);

router
  .route('/:id')
  .get(protect, getReview)
  .patch(protect, updateReview)
  .delete(deleteReview);

module.exports = router;
