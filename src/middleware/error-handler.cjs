const { HttpError } = require("../common/error/index.cjs");

const errorHanderMiddleware = (err, _req, res, _next) => {
  console.log(err);

  let status = 500;
  let message = "Internal server error";

  if (err instanceof HttpError) {
    status = err.statusCode;
    message = err.message;
  }

  res.status(status).json({ status, message });
};

module.exports = errorHanderMiddleware;
