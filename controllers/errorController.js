const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.keyValue.name;
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid data inputs: ${errors.join(',')}`;
  return new AppError(message, 400);
};

const handleTokenExpiredError = () =>
  new AppError('Your token has expired. Please login again!', 401);

const handleJsonWebTokenError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res, next) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    switch (err.name) {
      case 'CastError':
        err = handleCastErrorDB(err);
        break;
      case 'DuplicateFieldsDB':
        err = handleDuplicateFieldsDB(err);
        break;
      case 'ValidationError':
        err = handleValidationErrorDB(err);
        break;
      case 'JsonWebTokenError':
        err = handleJsonWebTokenError();
        break;
      case 'TokenExpiredError':
        err = handleTokenExpiredError();
        break;
      default:
        // handle other types of errors here
        err.message = err.message || 'Something went very wrong!';
    }
    sendErrorProd(err, res);
  }
};

module.exports = globalErrorHandler;
