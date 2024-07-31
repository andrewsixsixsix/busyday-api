const express = require("express");
const bodyParser = require("body-parser");

const { taskRouter } = require("./core/router/index.cjs");
const {
  errorHanderMiddleware,
  notFoundMiddleware,
} = require("./middleware/index.cjs");

const app = express();

app.use(bodyParser.json());

app.use("/api", taskRouter);

app.use(errorHanderMiddleware);
app.use(notFoundMiddleware);

module.exports = app;
