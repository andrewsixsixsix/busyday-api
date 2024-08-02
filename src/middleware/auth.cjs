const { jwtService } = require("../core/service/index.cjs");
const { HttpError } = require("../common/error/index.cjs");

const authMiddleware = async (req, _res, next) => {
  const header = req.get("Authorization");
  try {
    if (!header) {
      throw new HttpError(400, "Authorization header is missing");
    }
    const jwt = header.split(" ")[1];
    await jwtService.verify(jwt);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;
