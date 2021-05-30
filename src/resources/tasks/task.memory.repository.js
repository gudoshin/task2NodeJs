const tasks = [];


/**
 * Delete user in tasks by User Id
 * @param {string} userId User Id
 * @returns {void} delete User Id in tasks
 */
async function deleteUserInTasks(userId) {
  const selectedTasks = tasks.filter((task) => task.userId === userId);
  selectedTasks.forEach((task) => {
    const currentTask = task;
    currentTask.userId = null;
  });
};

/**
 * Delete board in tasks by Board Id
 * @param {string} boardId Board Id
 * @returns {void} delete Board Id in tasks
 */
async function deleteBoardInTasks(boardId) {
  const selectedTasks = tasks.filter((task) => task.boardId === boardId);
  selectedTasks.forEach((task) => {
    const currentTask = task;
    currentTask.boardId = null;
  });
};

/**
 * Delete task
 * @param {string} boardId Board Id
 * @param {string} taskId Task Id
 * @returns {object|boolean} Returns a deleted task or false if task not found
 */
async function deleteTask(boardId, taskId) {
  const taskIndex = tasks.findIndex(
    (task) => task && task.boardId === boardId && task.id === taskId
  );

  if (taskIndex >= 0) {
    return tasks.splice(taskIndex, 1);
  }
  return false;
};


/**
 * Return tasks by Board Id
 * @param {string} boardId Board Id
 * @returns {Array.<object>} returns array tasks
 */
const getTasksByBoardId = async (boardId) => tasks.filter((task) => task && task.boardId === boardId) || [];

/**
 * Return task by Board Id and Task Id 
 * @param {string} boardId Board Id 
 * @param {string} taskId Task Id
 * @returns {object} return task 
 */
const getTaskByBoardIdAndTaskId = async (boardId, taskId) =>  tasks.find((task) => task && task.boardId === boardId && task.id === taskId);

/**
 * Craete task
 * @param {object} task 
 * @returns {object} returns created task
 */
async function createTask(task) {
  tasks.push(task);
  return task;
};

/**
 * Update task data
 * @param {string} id Task Id
 * @param {string} title title data
 * @param {string} order order data
 * @param {string} description description task
 * @param {string} userId User Id
 * @param {string} boardId  Board Id
 * @param {string} columnId Column Id
 * @returns {object|boolean} Returns a updated task or false if task not found
 */
async function updateTask ( id, title, order, description, userId, boardId, columnId) {
  const taskIndex = tasks.findIndex(
    (task) => task && task.boardId === boardId && task.id === id
  );
  if (taskIndex >= 0) {
    tasks[taskIndex] = {id, title, order, description, userId, boardId, columnId};

    return tasks[taskIndex];
  }
  return false;
};

module.exports = {deleteBoardInTasks, deleteUserInTasks, deleteTask, getTasksByBoardId, getTaskByBoardIdAndTaskId, createTask, updateTask};
