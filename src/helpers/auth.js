const { randomUUID } = require('crypto');

const generateRandomToken = () => randomUUID().slice(0, 16);

module.exports = {
  generateRandomToken,
};
