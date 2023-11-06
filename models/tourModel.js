const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a max group size'],
  },
  difficlty: {
    type: String,
    reguired: [true, 'A tour must have a difficlty'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratinQuantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: Number,
  price: {
    type: Number,
    required: [true, 'A tour must have price'],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  StartDates: [Date],
});

// Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
