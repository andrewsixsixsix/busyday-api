const errorHanderMiddleware = (err, _req, res, _next) => {
  console.log(err);
  res.status(500).json({ status: 500, message: "Internal server error" });
};

module.exports = errorHanderMiddleware;
