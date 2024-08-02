const { ADMIN_USER_ID } = require("../common/constants.cjs");
const { HttpError } = require("../common/error/index.cjs");

const adminUserProtectorMiddleware = (req, _res, next) => {
  if (!req.path.startsWith("/users")) {
    return next();
  }

  try {
    let userId;
    switch (req.method) {
      case "PUT": {
        userId = req.body.id;
        break;
      }
      case "DELETE": {
        userId = +req.path.split("/")[2];
        break;
      }
      default:
        return next();
    }

    if (userId === ADMIN_USER_ID) {
      throw new HttpError(400, "Admin user cannot be changed or deleted");
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = adminUserProtectorMiddleware;
