const router = require('express').Router();
const { toResponse } = require('./board.model');
const Board = require('./board.model');
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');
const Task = require('../tasks/task.model');



router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  // map board fields to exclude secret fields like "password"
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

router.route('/:id/tasks').get(async (req, res) => {
  const {id} = req.params;
  const tasks = await tasksService.getAll(id);
  res.json(tasks);
});

router.route('/:id/tasks').post(async (req, res) => {
  try {
    await tasksService.validateTask(req.body);
    const task = new Task(req.body);
    task.boardId = req.params.id
    await tasksService.createTask(task);
    res.status(201).json(toResponse(task));
  } catch (error) {
    res.sendStatus(400);
  } 
});

router.route('/:id/tasks/:taskId').get(async (req, res) => {
  const {id, taskId} = req.params;
  const task = await tasksService.getTask(id, taskId);
  res.json(task);
});

router.route('/:id/tasks/:taskId').put(async (req, res) => {  
  try {
    const {id, taskId} = req.params;
    await tasksService.validateTask(req.body);
    const task = await tasksService.updateTask(id, taskId, req.body);
    res.status(200).json(toResponse(task));
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id/tasks/:taskId').delete(async (req, res) => {  
  try {
    const {id, taskId} = req.params;
    console.log(id, taskId);
    const result = await tasksService.getTask(id, taskId);
    if (result === null){
      res.sendStatus(404);
    }
    await tasksService.deleteTask(id, taskId);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }  
});

module.exports = router;
