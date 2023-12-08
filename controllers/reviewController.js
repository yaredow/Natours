const Review = require('../models/reviewModel');
const handlerFactory = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  const { tourId } = req.params;
  if (!req.body.tour) req.body.tour = tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = handlerFactory.getAll(Review);
exports.getReview = handlerFactory.getOne(Review);
exports.createReview = handlerFactory.createOne(Review);
exports.deleteReview = handlerFactory.deleteOne(Review);
exports.updateReview = handlerFactory.updateOne(Review);
