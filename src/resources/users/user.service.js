const Joi = require('joi');
const usersRepo = require('./user.memory.repository');

const UserSchema = Joi.object({
    name: Joi.string().required(),

    password: Joi.string().required(),

    login: Joi.string().required()
});
const getAll = () => usersRepo.getAll();

const createUser = (user) => {
    usersRepo.createUser(user);
};

const validateUser = (user) =>{
    const result = UserSchema.validate(user);
    if (result.error) throw new Error('неверный формат данных');
} 

module.exports = { getAll, createUser, validateUser };
