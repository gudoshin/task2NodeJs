const router = require('express').Router();
const { toResponse } = require('./user.model');
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {  
  try {
    usersService.validateUser(req.body);
    const user = new User(req.body);
    usersService.createUser(user);
    res.status(201).json(toResponse(user));
  } catch (error) {
    res.send(400);
  }  
});

router.route('/:id').get(async (req, res) => {
  try {
    const {id} = req.params;
    const user = await usersService.getUser(id);
    res.json(toResponse(user));
  } catch (error) {
    res.send(404);
  }
});

module.exports = router;
