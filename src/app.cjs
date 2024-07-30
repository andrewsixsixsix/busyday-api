const express = require("express");
const bodyParser = require("body-parser");

const { taskRouter } = require("./core/router/index.cjs");
const { notFoundMiddleware } = require("./middleware/index.cjs");

const app = express();

app.use(bodyParser.json());
app.use("/api", taskRouter);
app.use(notFoundMiddleware);

module.exports = app;
