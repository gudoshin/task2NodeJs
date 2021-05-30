const Joi = require('joi');
const boardsRepo = require('./board.memory.repository');

const BoardSchema = Joi.object({
    
    id: Joi.string(),

    title: Joi.string().required(),

    columns: Joi.array().required()
});
/**
 * Calling the function "get all boards"
 * @returns {Function} boardsRepo.getAll() the returned function
 */
const getAll = () => boardsRepo.getAll();

/**
 * Calling the function "get board by id"
 * @param {string} id User ID
 * @returns {Function} boardsRepo.getBoard(id) the returned function
 */
const getBoard = (id) => boardsRepo.getBoard(id);

/**
 * Calling the function "create board"
 * @param {object} board Board object
 * @returns {Function} boardsRepo.createBoard(board) the returned function
 */
const createBoard = (board) => {
    boardsRepo.createBoard(board);
};

/**
 * Board object verification by scheme
 * @param {object} board Board object
 * @returns {boolean} True if it matches the scheme
 */
const validateBoard = (board) =>{
    const result = BoardSchema.validate(board);
    if (result.error) {
        throw new Error(`неверный формат данных`);
    }
    return true;
} 

/**
 * Calling the function update board
 * @param {string} id Board ID
 * @param {object} data Board data
 * @returns {Function} boardsRepo.updateBoard(id,data) the retutned function
 */
const updateBoard = (id, data) => boardsRepo.updateBoard(id,data);

/**
 * Calling the function delete board
 * @param {string} id Board Id
 * @returns {Function}  boardsRepo.deleteBoard(id) the returned function
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, createBoard, validateBoard, getBoard, updateBoard, deleteBoard};