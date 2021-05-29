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
    boards[index].name = data.name;
    boards[index].login = data.login;
    boards[index].password = data.password;
    return getBoard(id);
  };

  async function deleteBoard(id) {
    const board = await getBoard(id);
    const index = boards.indexOf(board);
    delete boards[index];
  };
  module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
  