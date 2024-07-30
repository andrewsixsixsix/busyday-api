const authMiddleware = require("./auth.cjs");
const notFoundMiddleware = require("./not-found.cjs");

module.exports = {
  authMiddleware,
  notFoundMiddleware,
};
