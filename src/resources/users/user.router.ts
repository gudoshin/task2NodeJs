import { Request, Response } from "express";
const router = require('express').Router();
const { toResponse } = require('./user.model');
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (res: Response ) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req: Request, res: Response) => {  
  try {
    usersService.validateUser(req.body);
    const user = new User(req.body);
    usersService.createUser(user);
    res.status(201).json(toResponse(user));
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const user = await usersService.getUser(id);
    res.json(toResponse(user));
  } catch (error) {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {  
  try {
    const {id} = req.params;
    await usersService.validateUser(req.body);
    const user = await usersService.updateUser(id, req.body);
    res.status(200).json(toResponse(user));
  } catch (error) {
    res.sendStatus(400);
  }  
});

router.route('/:id').delete(async (req: Request, res: Response) => {  
  try {
    const {id} = req.params;
    await usersService.deleteUser(id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }  
});

module.exports = router;
