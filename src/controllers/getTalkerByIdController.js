const { getDataFromFile } = require('../helpers');

const getTalkerByIdController = (request, response) => {
  const { id } = request.params;
  const talkersFile = getDataFromFile('talker.json');
  const retrievedTalked = talkersFile.find((talker) => talker.id === parseInt(id, 10));

  if (!retrievedTalked) {
    return response.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }

  return response.status(200).json(retrievedTalked);
};

module.exports = {
  getTalkerByIdController,
};
