const db = require("../../db.cjs");
const {
  Task,
  TaskCreation,
  UpdatedTask,
} = require("../../common/typedef/task.cjs");

/**
 * @param {TaskCreation} task
 * @returns {number} ID of created task
 */
const create = (task) => {
  const query = `
    INSERT INTO tasks
      (title, description, status, priority, dueDate, userId)
    VALUES
      (?, ?, ?, ?, ?, ?);
    `;
  const { lastInsertRowid } = db
    .prepare(query)
    .run(
      task.title,
      task.description,
      task.status,
      task.priority,
      task.dueDate,
      task.userId
    );
  return lastInsertRowid;
};

/**
 * @param {number} id
 * @returns {number} Number of affected rows
 */
const _delete = (id) => {
  const query = "DELETE FROM tasks WHERE id = ?;";
  const { changes } = db.prepare(query).run(id);
  return changes;
};

/**
 * @param {number} userId
 * @returns {Task[]}
 */
const findAllByUserId = (userId) => {
  const query = "SELECT * FROM tasks WHERE userId = ?;";
  return db.prepare(query).all(userId);
};

/**
 * @param {number} id
 * @returns {Task=}
 */
const findById = (id) => {
  const query = "SELECT * FROM tasks WHERE id = ?;";
  return db.prepare(query).get(id);
};

/**
 * @param {UpdatedTask} task
 * @returns {number} Number of affected rows
 */
const update = (task) => {
  const query = `
    UPDATE
      tasks
    SET
      title = ?,
      description = ?,
      status = ?,
      priority = ?,
      dueDate = ?
    WHERE
      id = ?;
    `;
  const { changes } = db
    .prepare(query)
    .run(
      task.title,
      task.description,
      task.status,
      task.priority,
      task.dueDate,
      task.id
    );
  return changes;
};

const taskRepository = {
  create,
  delete: _delete,
  findAllByUserId,
  findById,
  update,
};

module.exports = taskRepository;
