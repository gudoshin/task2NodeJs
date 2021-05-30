const { deleteBoardInTasks } = require('../tasks/task.memory.repository');

const boards = [];

/**
 * Returns all boards
 * @returns  {Array.<object>} Array of boards
 */
async function getAll() {
 return boards;
};

/**
 * Create new board
 * @param {object} board Board object
 * @returns {void} add new board to boards array
 */
async function createBoard(board) {
    boards.push(board);
}

/**
 * Returns the board by id
 * @param {string} id Board Id
 * @returns {object} returns Board object
 */
async function getBoard(id) {
  let board = '';
    boards.forEach(item => {if (item.id === id) board = item;});
    if (board === '') throw new Error('Board not found');
    return board;
}

/**
 * Update board by Id 
 * @param {string} id Board Id
 * @param {object} data Board object
 * @returns {object} the returned Board
 */
async function updateBoard(id, data) {
  let board = '';
  boards.forEach( item => {
    if (item.id === id){
      board = item;
    }
  } );
  const index = boards.indexOf(board);
  boards[index] = data;
  return boards[index];
};

/**
 * Delete board by Id and delete board in tasks
 * @param {string} id Board Id
 * @returns {void} delete board and calls the function deleteBoardInTasks(id)
 */
async function deleteBoard(id) {
  const board = await getBoard(id);
  const index = boards.indexOf(board);
  await deleteBoardInTasks(id);
  boards.splice(index, 1);
};

module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
  