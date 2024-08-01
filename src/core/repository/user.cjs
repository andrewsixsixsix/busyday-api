const db = require("../../db.cjs");
const {
  User,
  UserCreation,
  UpdatedUser,
} = require("../../common/typedef/user.cjs");

/**
 * @param {UserCreation} user
 * @returns {number} ID of created user
 */
const create = (user) => {
  const query = `
    INSERT INTO users
      (username, email, name, password, avatar)
    VALUES
      (?, ?, ?, ?, ?);
    `;
  const { lastInsertRowid } = db
    .prepare(query)
    .run(user.username, user.email, user.name, user.password, user.avatar);
  return lastInsertRowid;
};

/**
 * @param {number} id
 * @returns {number} Number of affected rows
 */
const _delete = (id) => {
  const query = "DELETE FROM users WHERE id = ?;";
  const { changes } = db.prepare(query).run(id);
  return changes;
};

/**
 * @param {number} id
 * @returns {User=}
 */
const findById = (id) => {
  const query = "SELECT * FROM users WHERE id = ?;";
  return db.prepare(query).get(id);
};

/**
 * @param {string} username
 * @returns {User=}
 */
const findByUsername = (username) => {
  const query = "SELECT * FROM users WHERE username = ?;";
  return db.prepare(query).get(username);
};

/**
 * @param {UpdatedUser} user
 * @returns {number} Number of affected rows
 */
const update = (user) => {
  const query = `
    UPDATE
      users
    SET
      username = ?,
      email = ?,
      name = ?,
      avatar = ?
    WHERE
      id = ?;
    `;
  const { changes } = db
    .prepare(query)
    .run(user.username, user.email, user.name, user.avatar, user.id);
  return changes;
};

module.exports = {
  create,
  delete: _delete,
  findById,
  findByUsername,
  update,
};
