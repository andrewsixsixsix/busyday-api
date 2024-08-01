const express = require("express");
const bodyParser = require("body-parser");

const {
  authRouter,
  taskRouter,
  userRouter,
} = require("./core/router/index.cjs");
const {
  errorHanderMiddleware,
  notFoundMiddleware,
} = require("./middleware/index.cjs");

const app = express();

app.use(bodyParser.json());

app.use("/api", authRouter);
app.use("/api", taskRouter);
app.use("/api", userRouter);

app.use(errorHanderMiddleware);
app.use(notFoundMiddleware);

module.exports = app;
