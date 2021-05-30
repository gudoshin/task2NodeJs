const Joi = require('joi');
const usersRepo = require('./user.memory.repository');

const UserSchema = Joi.object({
    name: Joi.string().required(),

    password: Joi.string().required(),

    login: Joi.string().required(),

    id: Joi.string()
});
/**
 * The function returns the function "get all users"
 * @returns {function} function usersRepo.getAll()
 */
const getAll = () => usersRepo.getAll();

const getUser = (id) => usersRepo.getUser(id);

const createUser = (user) => {
    usersRepo.createUser(user);
};

const validateUser = (user) =>{
    const result = UserSchema.validate(user);
    if (result.error) {
        throw new Error(`неверный формат данных`);
    }
} 

const updateUser = (id, data) => usersRepo.updateUser(id,data);

const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, createUser, validateUser, getUser, updateUser, deleteUser};
