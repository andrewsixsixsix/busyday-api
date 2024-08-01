const adminUserProtectorMiddleware = require("./admin-user-protector.cjs");
const authMiddleware = require("./auth.cjs");
const errorHanderMiddleware = require("./error-handler.cjs");
const notFoundMiddleware = require("./not-found.cjs");

module.exports = {
  adminUserProtectorMiddleware,
  authMiddleware,
  errorHanderMiddleware,
  notFoundMiddleware,
};
