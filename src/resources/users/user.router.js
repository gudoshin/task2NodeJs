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
    res.json(toResponse(user));
  } catch (error) {
    res.send(400);
  }  
});

module.exports = router;
