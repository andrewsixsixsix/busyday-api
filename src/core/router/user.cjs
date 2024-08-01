const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../middleware/index.cjs");
const { userService } = require("../service/index.cjs");
const { ADMIN_USER_ID } = require("../../common/constants.cjs");

// TODO: middleware to protect admin user
router.use(authMiddleware);
router.route("/users").put(update);
router.route("/users/:id([0-9]+)").get(getById).delete(deleteById);

function deleteById(req, res, _) {
  const userId = req.params.id;

  if (userId == ADMIN_USER_ID) {
    res
      .status(400)
      .json({ status: 400, message: "Admin user cannot be deleted" });
    return;
  }

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

  if (user.id == ADMIN_USER_ID) {
    res
      .status(400)
      .json({ status: 400, message: "Admin user cannot be updated" });
    return;
  }

  userService.update(user);
  res.end();
}

module.exports = userRouter = router;
