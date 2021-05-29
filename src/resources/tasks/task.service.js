const Joi = require('joi');
const tasksRepo = require('./task.memory.repository');

const TaskSchema = Joi.object({
    
    id: Joi.string(),

    title: Joi.string().required(),

    order: Joi.number().required(),
    
    description: Joi.string().required(),
    
    userId: Joi.any().required(),

    boardId: Joi.any().required(),

    columnId: Joi.any().required()
});

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getTask = (id, taskId) => tasksRepo.getTask(id, taskId);

const createTask = (task) => {
    tasksRepo.createTask(task);
};

const validateTask = (task) =>{
    const result = TaskSchema.validate(task);
    if (result.error) {
        throw new Error(`неверный формат данных`);
    }
} 

const updateTask = (id, taskId, data) => tasksRepo.updateTask(id, taskId, data);

const deleteTask = (id, taskId) => tasksRepo.deleteTask(id, taskId);

module.exports = { getAll, createTask, validateTask, getTask, updateTask, deleteTask};