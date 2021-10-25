const express = require('express');
const UsersService = require('../services/usersService');
const validatorHandler = require('../middlewares/validatorHandler');

const router = express.Router();
const service = new UsersService();

router.get('/', async (request, response) => {
  const users = await service.find();
  response.json(users);
});

module.exports = router;
