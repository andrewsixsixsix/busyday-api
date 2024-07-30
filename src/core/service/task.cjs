const { taskRepository } = require("../repository/index.cjs");

const createTask = (task) => {
  const id = taskRepository.create(task);
  console.log(id);
};

const deleteTask = (taskId) => {
  const deleted = taskRepository.delete(taskId);
  console.log(deleted);
};

const findAllTasksByUserId = (userId) => {
  const tasks = taskRepository.findAllByUserId(userId);
  console.log(tasks);
};

const findTaskById = (taskId) => {
  const task = taskRepository.findById(taskId);
  // TODO: throw 404 if task is undefined
  console.log(task);
};

const updateTask = (task) => {
  const updated = taskRepository.update(task);
  console.log(updated);
};

const taskService = {
  create: createTask,
  delete: deleteTask,
  findAllByUserId: findAllTasksByUserId,
  findById: findTaskById,
  update: updateTask,
};

module.exports = taskService;
