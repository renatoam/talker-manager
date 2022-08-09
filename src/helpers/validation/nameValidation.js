const { checkFieldAgainstNull } = require('./miscValidation');

const checkNameLength = (name) => name.length >= 3;

const validateName = (name) => {
  if (checkFieldAgainstNull(name)) {
    return {
      error: true,
      errorMessage: 'O campo "name" é obrigatório',
    };
  }
  
  if (!checkNameLength(name)) {
    return {
      error: true,
      errorMessage: 'O "name" deve ter pelo menos 3 caracteres',
    }; 
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  checkNameLength,
  validateName,
};
