const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../middleware/index.cjs");
const { taskService } = require("../service/index.cjs");

router
  .route("/tasks/:id([0-9]+)?")
  .get(authMiddleware, get)
  .post(authMiddleware, create)
  .put(authMiddleware, update)
  .delete(authMiddleware, deleteById);

function create(req, res, _) {
  const task = req.body;
  const id = taskService.create(task);
  res.status(201).json({ id });
}

function deleteById(req, res, _) {
  const taskId = req.params.id;
  taskService.delete(taskId);
  res.end();
}

function get(req, res, next) {
  req.params.id ? getById(req, res, next) : getAll(req, res, next);
}

function getAll(req, res, _) {
  const userId = req.query.userId;
  const tasks = taskService.findAllByUserId(userId);
  res.json(tasks);
}

function getById(req, res, _) {
  const taskId = req.params.id;
  const task = taskService.findById(taskId);

  if (!task) {
    res.status(404).json({ status: 404, message: "Task not found" });
    return;
  }

  res.json(task);
}

function update(req, res, _) {
  const task = req.body;
  taskService.update(task);
  res.end();
}

module.exports = taskRouter = router;
