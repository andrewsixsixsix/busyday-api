const AppError = require("./app.cjs");

class HttpError extends AppError {
  statusCode;

  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = HttpError;
