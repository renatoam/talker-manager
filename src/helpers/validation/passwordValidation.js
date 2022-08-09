const { checkFieldAgainstNull } = require('./miscValidation');

const checkPasswordLength = (password) => password.length >= 6;

const validatePassword = (password) => {
  if (checkFieldAgainstNull(password)) {
    return {
      error: true,
      errorMessage: 'O campo "password" é obrigatório',
    };
  }
  
  if (!checkPasswordLength(password)) {
    return {
      error: true,
      errorMessage: 'O "password" deve ter pelo menos 6 caracteres',
    }; 
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  checkPasswordLength,
  validatePassword,
};
