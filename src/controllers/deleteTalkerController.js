const { getDataFromFile, deleteRegisterFromListFile } = require('../helpers');

const deleteTalkerController = (request, response) => {
  const { id } = request.params;

  const talkerFile = 'talker.json';
  const staleTalkers = getDataFromFile(talkerFile);

  try {
    deleteRegisterFromListFile(talkerFile, staleTalkers, id);

    return response.status(204).end();
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

module.exports = {
  deleteTalkerController,
};
