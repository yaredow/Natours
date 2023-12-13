const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1 Get tour data from collection
  const tour = await Tour.find();

  // 2 Build template

  res.status(200).render('overview', {
    title: 'All Tours',
    tour,
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Magic Eraser',
  });
};
