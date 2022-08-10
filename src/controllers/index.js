const loginController = require('./loginController');
const getTalkersController = require('./getTalkersController');
const createTalkerController = require('./createTalkerController');
const updateTalkerController = require('./updateTalkerController');
const searchTalkerController = require('./searchTalkerController');
const getTalkerByIdController = require('./getTalkerByIdController');

module.exports = {
  ...loginController,
  ...getTalkersController,
  ...createTalkerController,
  ...updateTalkerController,
  ...searchTalkerController,
  ...getTalkerByIdController,
};
