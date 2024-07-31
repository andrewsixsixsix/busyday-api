/**
 * @typedef {1|2|3} TaskPriority
 */

/**
 * @typedef {"A"|"B"} TaskStatus
 */

/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {string|null} description
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {string|null} dueDate
 * @property {string|null} createdAt
 * @property {number} userId
 */

/**
 * @typedef {Object} TaskCreation
 * @property {string} title
 * @property {string|null} description
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {string|null} dueDate
 * @property {number} userId
 */

/**
 * @typedef {Object} UpdatedTask
 * @property {number} id
 * @property {string} title
 * @property {string|null} description
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {string|null} dueDate
 */

module.exports = {};
