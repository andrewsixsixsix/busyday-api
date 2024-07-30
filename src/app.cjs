const express = require("express");
const router = require("./router.cjs");

const { notFoundMiddleware } = require("./middleware/index.cjs");

const app = express();

app.use("/api", router);
app.use(notFoundMiddleware);

module.exports = app;
