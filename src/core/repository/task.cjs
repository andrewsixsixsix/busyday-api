const db = require("../../db.cjs");

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

const _delete = (id) => {
  const query = "DELETE FROM tasks WHERE id = ?;";
  const { changes } = db.prepare(query).run(id);
  return changes;
};

const findAllByUserId = (userId) => {
  const query = "SELECT * FROM tasks WHERE userId = ?;";
  return db.prepare(query).all(userId);
};

const findById = (id) => {
  const query = "SELECT * FROM tasks WHERE id = ?;";
  return db.prepare(query).get(id);
};

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
