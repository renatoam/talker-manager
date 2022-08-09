const { getDataFromFile } = require('../helpers');

const getTalkersController = (_, response) => {
  const talkersFile = getDataFromFile('talker.json');

  if (!talkersFile.length) { return response.status(200).json([]); }

  return response.status(200).json(talkersFile);
};

module.exports = {
  getTalkersController,
};
