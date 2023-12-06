const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
} = require('../controllers/reviewController');

const router = express.Router();

router.route('/').get(getAllReviews);
router.route('/:id').get(getReview);

router.route('/').post(createReview);

module.exports = router;
