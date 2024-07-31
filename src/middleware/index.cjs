const authMiddleware = require("./auth.cjs");
const errorHanderMiddleware = require("./error-handler.cjs");
const notFoundMiddleware = require("./not-found.cjs");

module.exports = {
  authMiddleware,
  errorHanderMiddleware,
  notFoundMiddleware,
};
