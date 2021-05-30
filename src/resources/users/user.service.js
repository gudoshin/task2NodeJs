const Joi = require('joi');
const usersRepo = require('./user.memory.repository');

const UserSchema = Joi.object({
    name: Joi.string().required(),

    password: Joi.string().required(),

    login: Joi.string().required(),

    id: Joi.string()
});
/**
 * Calling the function "get all users"
 * @returns {Function} usersRepo.getAll() the returned function
 */
const getAll = () => usersRepo.getAll();

/**
 * Calling the function "get user by id"
 * @param {string} id User ID
 * @returns {Function } usersRepo.getUser(id) the returned function
 */
const getUser = (id) => usersRepo.getUser(id);

/**
 * Calling the function "create user"
 * @param {object} user User object
 * @returns {Function} usersRepo.createUser(user) the returned function
 */
const createUser = (user) => {
    usersRepo.createUser(user);
};

/**
 *  User object verification by scheme
 * @param {object} user User object
 * @returns {boolean} True if it matches the scheme
 */
const validateUser = (user) =>{
    const result = UserSchema.validate(user);
    if (result.error) {
        throw new Error(`неверный формат данных`);
    }
    return true;
} 

/**
 * Calling the function update user
 * @param {string} id User Id
 * @param {object} data User data
 * @returns {Function} usersRepo.updateUser(id,data) the returned function
 */
const updateUser = (id, data) => usersRepo.updateUser(id,data);

/**
 * Calling the function delete user
 * @param {string} id User Id 
 * @returns {Function} usersRepo.deleteUser(id) the returned function
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, createUser, validateUser, getUser, updateUser, deleteUser};
