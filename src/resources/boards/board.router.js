const router = require('express').Router();
const { toResponse } = require('./board.model');
const Board = require('./board.model');
const boardsService = require('./board.service');



router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {  
  try {
    boardsService.validateBoard(req.body);
    const board = new Board(req.body);
    boardsService.createBoard(board);
    res.status(201).json(toResponse(board));
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id').get(async (req, res) => {
  try {
    const {id} = req.params;
    if (!id) res.sendStatus(404);
    const board = await boardsService.getBoard(id);
    res.json(toResponse(board));
  } catch (error) {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {  
  try {
    const {id} = req.params;
    await boardsService.validateBoard(req.body);
    const board = await boardsService.updateBoard(id, req.body);
    res.status(200).json(toResponse(board)); 
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id').delete(async (req, res) => {  
  try {
    const {id} = req.params;
    await boardsService.deleteBoard(id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }  
});

module.exports = router;
