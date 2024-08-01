const { userRepository } = require("../repository/index.cjs");
const {
  User,
  UserCreation,
  UpdatedUser,
} = require("../../common/typedef/user.cjs");

/**
 * @param {UserCreation} user
 * @returns {number} ID of created user
 */
const createUser = (user) => userRepository.create(user);

/**
 * @param {number} id
 * @returns {number} Number of affected rows
 */
const deleteUser = (id) => userRepository.delete(id);

/**
 * @param {number} id
 * @returns {User}
 */
const findUserById = (id) => userRepository.findById(id);

/**
 * @param {UpdatedUser} user
 * @returns {number} Number of affected rows
 */
const updateUser = (user) => userRepository.update(user);

const userService = {
  create: createUser,
  delete: deleteUser,
  findById: findUserById,
  update: updateUser,
};

module.exports = userService;
