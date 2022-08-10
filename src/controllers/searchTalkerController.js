const { getDataFromFile } = require('../helpers');

const searchTalkerController = (request, response) => {
  const { q } = request.query;
  
  const talkersFile = getDataFromFile('talker.json');
  const results = talkersFile
    .filter((talkers) => talkers.name.includes(q));

  if (!q) return response.status(200).json(talkersFile);
  if (!results.length) return response.status(200).json([]);

  return response.status(200).json(results);
};

module.exports = {
  searchTalkerController,
};
