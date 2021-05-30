const { deleteBoardInTasks } = require('../tasks/task.memory.repository');

const boards = [];

const getAll = async () => boards;

async function createBoard(board) {
    boards.push(board);
}

async function getBoard(id) {
  let board = '';
    boards.forEach(item => {if (item.id === id) board = item;});
    if (board === '') throw new Error('Board not found');
    return board;
}

async function updateBoard(id, data) {
    let board = '';
    boards.forEach( item => {
      if (item.id === id){
        board = item;
      }
    } );
    const index = boards.indexOf(board);
    boards[index] = data;
    return getBoard(id);
  };

  async function deleteBoard(id) {
    const board = await getBoard(id);
    const index = boards.indexOf(board);
    await deleteBoardInTasks(id);
    boards.splice(index, 1);
  };
  module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
  