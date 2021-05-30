const tasks = [];

async function deleteUserInTasks(userId) {
  const selectedTasks = tasks.filter((task) => task.userId === userId);
  selectedTasks.forEach((task) => {
    const currentTask = task;
    currentTask.userId = null;
  });
};

async function deleteBoardInTasks(boardId) {
  const selectedTasks = tasks.filter((task) => task.boardId === boardId);
  selectedTasks.forEach((task) => {
    const currentTask = task;
    currentTask.boardId = null;
  });
};

async function deleteTask(boardId, taskId) {
  const taskIndex = tasks.findIndex(
    (task) => task && task.boardId === boardId && task.id === taskId
  );

  if (taskIndex >= 0) {
    return tasks.splice(taskIndex, 1);
  }
  return false;
};

const getTasksByBoardId = async (boardId) => tasks.filter((task) => task && task.boardId === boardId) || [];

const getTaskByBoardIdAndTaskId = async (boardId, taskId) =>  tasks.find((task) => task && task.boardId === boardId && task.id === taskId);

async function postTask(task) {
  tasks.push(task);
  return task;
};

async function updateTask ( id, title, order, description, userId, boardId, columnId) {
  const taskIndex = tasks.findIndex(
    (task) => task && task.boardId === boardId && task.id === id
  );
  if (taskIndex >= 0) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    };

    return tasks[taskIndex];
  }
  return false;
};

module.exports = {
  deleteBoardInTasks,
  deleteUserInTasks,
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
