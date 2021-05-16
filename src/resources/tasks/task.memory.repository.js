const tasks = [];

const getAll = async (boardId) => {
    const result = [];
    tasks.forEach(item => {
        if (item.boardId === boardId) result.push(item);
    });
    return result;
}

async function createTask(task) {
    tasks.push(task);
}

async function getTask(boardId, id) {
        let task = '';
        const tasksarr = await getAll(boardId);
        tasksarr.forEach(item => {if (item.id === id) task = item;});
        if (task === '') {
            return null;
        }
        return task;  
}

async function updateTask(boardId ,id, data) {
    let task = '';
    const tasksarr = await getAll(boardId);
    tasksarr.forEach( item => {
      if (item.id === id){
        task = item;
      }
    } );
    const index = tasks.indexOf(task);
    tasks[index].title = data.title;
    tasks[index].order = data.order;
    tasks[index].description = data.description;
    tasks[index].userId = data.userId;
    tasks[index].boardId = data.boardId;
    tasks[index].columnId = data.columnId;
    return getTask(boardId, id);
  };

  async function deleteTask(boardId, id) {
            const task = await getTask(boardId, id);
            const index = tasks.indexOf(task);
            delete tasks[index];      
  };
  module.exports = { getAll, createTask, getTask, updateTask, deleteTask };
  