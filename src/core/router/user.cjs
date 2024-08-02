const express = require("express");
const router = express.Router();

const {
  adminUserProtectorMiddleware,
  authMiddleware,
} = require("../../middleware/index.cjs");
const { userService } = require("../service/index.cjs");

router
  .route("/users/:id([0-9]+)?")
  .get(authMiddleware, getById)
  .delete(authMiddleware, adminUserProtectorMiddleware, deleteById)
  .put(authMiddleware, adminUserProtectorMiddleware, update);

function deleteById(req, res, _) {
  const userId = req.params.id;
  userService.delete(userId);
  res.end();
}

function getById(req, res, _) {
  const userId = req.params.id;
  const user = userService.findById(userId);

  if (!user) {
    res.status(404).json({ status: 404, message: "User not found" });
    return;
  }

  res.json(user);
}

function update(req, res, _) {
  const user = req.body;
  userService.update(user);
  res.end();
}

module.exports = userRouter = router;
