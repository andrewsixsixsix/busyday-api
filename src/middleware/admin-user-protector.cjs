const { ADMIN_USER_ID } = require("../common/constants.cjs");

const adminUserProtectorMiddleware = (req, res, next) => {
  if (!req.path.startsWith("/users")) {
    return next();
  }

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
    res.status(400).json({
      status: 400,
      message: "Admin user cannot be changed or deleted",
    });
    return;
  }

  next();
};

module.exports = adminUserProtectorMiddleware;
