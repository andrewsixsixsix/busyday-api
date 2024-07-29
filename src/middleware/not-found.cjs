const notFoundMiddleware = (req, res) =>
  res.status(404).json({
    status: 404,
    message: `URL '${req.url}' not found`,
  });

module.exports = notFoundMiddleware;
