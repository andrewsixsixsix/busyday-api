const { taskRepository } = require("../repository/index.cjs");

const createTask = (task) => taskRepository.create(task);

const deleteTask = (taskId) => taskRepository.delete(taskId);

const findAllTasksByUserId = (userId) => taskRepository.findAllByUserId(userId);

const findTaskById = (taskId) => taskRepository.findById(taskId);

const updateTask = (task) => taskRepository.update(task);

const taskService = {
  create: createTask,
  delete: deleteTask,
  findAllByUserId: findAllTasksByUserId,
  findById: findTaskById,
  update: updateTask,
};

module.exports = taskService;
