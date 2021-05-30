const Joi = require('joi');
const boardsRepo = require('./board.memory.repository');

const BoardSchema = Joi.object({
    
    id: Joi.string(),

    title: Joi.string().required(),

    columns: Joi.array().required()
});

const getAll = () => boardsRepo.getAll();

const getBoard = (id) => boardsRepo.getBoard(id);

const createBoard = (board) => {
    boardsRepo.createBoard(board);
};

const validateBoard = (board) =>{
    const result = BoardSchema.validate(board);
    if (result.error) {
        throw new Error(`неверный формат данных`);
    }
} 

const updateBoard = (id, data) => boardsRepo.updateBoard(id,data);

const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, createBoard, validateBoard, getBoard, updateBoard, deleteBoard};