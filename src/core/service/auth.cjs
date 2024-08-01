const db = require("../../db.cjs");
const userService = require("./user.cjs");
const { HttpError } = require("../../common/error/index.cjs");
const { UserCreation } = require("../../common/typedef/user.cjs");
const {
  LoginCredentials,
  LoginResult,
} = require("../../common/typedef/auth.cjs");

/**
 * @param {LoginCredentials} credentials
 * @returns {LoginResult} JWT token and user details
 */
const login = (credentials) => {
  const user = userService.findByUsername(credentials.username);

  if (!user) {
    throw new HttpError(404, `User '${credentials.username}' not found`);
  } else if (user.password !== credentials.password) {
    throw new HttpError(401, "Wrong password");
  }

  const { password, createdDate, ...appUser } = user;

  // TODO: generate JWT

  return { jwt: "fake", user: appUser };
};

const logout = () => {};

/**
 * @param {UserCreation} user
 * @returns {number} ID of created user
 */
const signup = (user) => userService.create(user);

const authService = {
  login,
  logout,
  signup,
};

module.exports = authService;
