const { getDataFromFile, validateTalker, updateJsonListFile } = require('../helpers');

const updateTalkerController = async (request, response) => {
  const { id } = request.params;
  const updatedTalker = { ...request.body, id: Number(id) };

  const talkerFile = 'talker.json';
  const staleTalkers = getDataFromFile(talkerFile);
  const filteredTalkers = staleTalkers
    .filter((talker) => talker.id !== Number(id));

  try {
    await validateTalker(updatedTalker);
    updateJsonListFile(talkerFile, filteredTalkers, updatedTalker);

    return response.status(200).json(updatedTalker);
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

module.exports = {
  updateTalkerController,
};
