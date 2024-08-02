const express = require("express");
const router = express.Router();

const { authService } = require("../service/index.cjs");

router.post("/auth/login", login);
router.post("/auth/logout", logout);
router.post("/auth/signup", signup);

async function login(req, res) {
  const credentials = req.body;
  const { jwt, user } = await authService.login(credentials);
  res.set("Authorization", `Bearer ${jwt}`).json(user);
}

function logout(_req, res) {
  res.end();
}

function signup(req, res) {
  const user = req.body;
  const id = authService.signup(user);
  res.status(201).json({ id });
}

module.exports = authRouter = router;
