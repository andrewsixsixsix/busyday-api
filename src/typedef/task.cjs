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
 * @property {?string} description
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {?string} dueDate
 * @property {?string} createdAt
 * @property {number} userId
 */

/**
 * @typedef {Object} TaskCreation
 * @property {string} title
 * @property {?string} description
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {?string} dueDate
 * @property {number} userId
 */

/**
 * @typedef {Object} UpdatedTask
 * @property {number} id
 * @property {string} title
 * @property {?string} description
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {?string} dueDate
 */

module.exports = {};
