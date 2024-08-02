const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");
const { HttpError } = require("../common/error/index.cjs");

const errorHanderMiddleware = (err, _req, res, _next) => {
  console.log(err);

  let status = 500;
  let message = "Internal server error";

  if (err instanceof HttpError) {
    status = err.statusCode;
    message = err.message;
  } else if (err instanceof TokenExpiredError) {
    status = 400;
    message = "Authentication token expired";
  } else if (err instanceof JsonWebTokenError) {
    status = 400;
    message = "Invalid authentication token";
  }

  res.status(status).json({ status, message });
};

module.exports = errorHanderMiddleware;
