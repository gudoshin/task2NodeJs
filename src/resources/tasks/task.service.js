const tasksRepo = require('./task.memory.repository');

/**
 * Calling the function "create task"
 * @param {object} task Task Id
 * @returns {Function} tasksRepo.createTask(task) the returned function
 */
const createTask = (task) => tasksRepo.createTask(task);

/**
 * Calling the function delete task
 * @param {string} boardId Board Id
 * @param {string} taskId Task Id
 * @returns {Function} tasksRepo.deleteTask(boardId, taskId) the returned function
 */
const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

/**
 * Calling the function getTasksByBoardId
 * @param {string} boardId Board Id
 * @returns  {Function} tasksRepo.getTasksByBoardId(boardId) the returned function
 */
const getTasksByBoardId = (boardId) => tasksRepo.getTasksByBoardId(boardId);

/**
 * Calling the function getTaskByBoardIdAndTaskId
 * @param {string} boardId Board Id
 * @param {string} taskId Task Id
 * @returns {Function} tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId) the returned function
 */
const getTaskByBoardIdAndTaskId = (boardId, taskId) =>
  tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId);

/**
 * Calling the function update task
 * @param {string} id Task Id
 * @param {string} title title data
 * @param {string} order order data
 * @param {string} description description task
 * @param {string} userId User Id
 * @param {string} boardId  Board Id
 * @param {string} columnId Column Id
 * @returns {Function} tasksRepo.updateTask( id, title, order, description, userId, boardId, columnId) the returned function
 */
const updateTask = (id, title, order, description, userId, boardId, columnId) =>
  tasksRepo.updateTask( id, title, order, description, userId, boardId, columnId);

module.exports = {deleteTask, getTasksByBoardId, getTaskByBoardIdAndTaskId, createTask, updateTask};
