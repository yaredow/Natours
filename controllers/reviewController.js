const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const handlerFactory = require('./handlerFactory');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };
  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    data: {
      reviews,
    },
  });
});

exports.setTourUserIds = (req, res, next) => {
  const { tourId } = req.params;
  if (!req.body.tour) req.body.tour = tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getReview = handlerFactory.getOne(Review);
exports.createReview = handlerFactory.createOne(Review);
exports.deleteReview = handlerFactory.deleteOne(Review);
exports.updateReview = handlerFactory.updateOne(Review);
