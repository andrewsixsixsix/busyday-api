const express = require("express");
const taskRouter = express.Router();

const { authMiddleware } = require("../../middleware/index.cjs");
const taskService = require("../service/task.cjs");

taskRouter.use(authMiddleware);
taskRouter.route("/tasks").get(getAll).post(create).put(update);
taskRouter.route("/tasks/:id([0-9]+)").get(getById).delete(deleteById);

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

module.exports = taskRouter;
