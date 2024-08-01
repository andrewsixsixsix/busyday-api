const { AppUser, User } = require("./user.cjs");

/**
 * @typedef {Object} LoginCredentials
 * @property {string} username
 * @property {string} password
 */

/**
 * @typedef {Object} LoginResult
 * @property {string} jwt
 * @property {AppUser} user
 */
