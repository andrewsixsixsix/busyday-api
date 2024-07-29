const express = require("express");
const router = express.Router();
const authMiddleware = require("./middleware/auth.cjs");

router.use(authMiddleware);
router.route("/todos").get(getAll).post(create).put(update);
router.route("/todos/[0-9]+").get(getById).delete(deleteById);

function create(req, res) {
  // TODO: implement
  res.end();
}

function deleteById(req, res) {
  // TODO: implement
  res.end();
}

function getAll(req, res) {
  // TODO: implement
  res.end();
}

function getById(req, res) {
  // TODO: implement
  res.end();
}

function update(req, res) {
  // TODO: implement
  res.end();
}

module.exports = router;
