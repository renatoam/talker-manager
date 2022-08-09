const loginController = require('./loginController');
const getTalkersController = require('./getTalkersController');
const createTalkerController = require('./createTalkerController');
const getTalkerByIdController = require('./getTalkerByIdController');

module.exports = {
  ...loginController,
  ...getTalkersController,
  ...createTalkerController,
  ...getTalkerByIdController,
};
