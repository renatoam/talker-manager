const { updateJsonListFile, validateTalker, getDataFromFile } = require('../helpers');

const createTalkerController = async (request, response) => {
  const talkerFile = 'talker.json';
  const talkers = getDataFromFile(talkerFile);
  const id = talkers.length + 1;
  const newTalker = { ...request.body, id };

  try {
    await validateTalker(newTalker);
    updateJsonListFile(talkerFile, talkers, newTalker);

    return response.status(201).json(newTalker);
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

module.exports = {
  createTalkerController,
};
