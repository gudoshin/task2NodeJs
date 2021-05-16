const router = require('express').Router();
const { toResponse } = require('./task.model');
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  // map task fields to exclude secret fields like "password"
  res.json(tasks.map(Task.toResponse));
});

router.route('/').post(async (req, res) => {  
  try {
    tasksService.validateTask(req.body);
    const task = new Task(req.body);
    tasksService.createTask(task);
    res.status(201).json(toResponse(task));
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id').get(async (req, res) => {
  try {
    const {id} = req.params;
    const task = await tasksService.getTask(id);
    res.json(toResponse(task));
  } catch (error) {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {  
  try {
    const {id} = req.params;
    await tasksService.validateTask(req.body);
    const task = await tasksService.updateTask(id, req.body);
    res.status(200).json(toResponse(task));
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id').delete(async (req, res) => {  
  try {
    const {id} = req.params;
    await tasksService.deleteTask(id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }  
});

module.exports = router;
