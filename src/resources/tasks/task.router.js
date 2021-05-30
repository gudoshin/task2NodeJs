const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getTasksByBoardId(boardId);
  if (tasks.length) {
    res.json(tasks);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const result = await tasksService.postTask(
    new Task({ title, order, description, userId, boardId, columnId })
  );
  if (typeof title === 'string') {
    res.status(201).json(Task.toResponse(result));
  } else {
    res.sendStatus(400);
  }
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await tasksService.getTaskByBoardIdAndTaskId(boardId, taskId);
  if (task) {
    res.json(task);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const { boardId, id } = req.params;
  const { title, order, description, userId, columnId } = req.body;

  const result = await tasksService.updateTask(
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );
  if (typeof title === 'string' && result) {
    res.json(result);
  } else {
    res.sendStatus(400);
  }
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const { boardId, taskId } = req.params;
  const result = await tasksService.deleteTask(boardId, taskId);
  if (result) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;