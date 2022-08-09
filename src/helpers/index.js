const auth = require('./auth');
const readFile = require('./readFile');
const validations = require('./validation');
const miscellaneous = require('./miscellaneous');

module.exports = {
  ...auth,
  ...readFile,
  ...validations,
  ...miscellaneous,
};
