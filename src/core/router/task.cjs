const express = require("express");
const taskRouter = express.Router();

const { authMiddleware } = require("../../middleware/index.cjs");
const taskService = require("../service/task.cjs");

taskRouter.use(authMiddleware);
taskRouter.route("/tasks").get(getAll).post(create).put(update);
taskRouter.route("/tasks/:id([0-9]+)").get(getById).delete(deleteById);

function create(req, res) {
  const task = req.body;
  taskService.create(task);
  res.end();
}

function deleteById(req, res) {
  const taskId = req.params.id;
  taskService.delete(taskId);
  res.end();
}

function getAll(req, res) {
  const userId = 1;
  const tasks = taskService.findAllByUserId(userId);
  res.end();
}

function getById(req, res) {
  const taskId = req.params.id;
  const task = taskService.findById(taskId);
  res.end();
}

function update(req, res) {
  const task = req.body;
  taskService.update(task);
  res.end();
}

module.exports = taskRouter;
