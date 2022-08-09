const { checkFieldAgainstNull } = require('./miscValidation');

const validateTalk = (talk) => {
  if (checkFieldAgainstNull(talk)) {
    return {
      error: true,
      errorMessage: 'O campo "talk" é obrigatório',
    };
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  validateTalk,
};
