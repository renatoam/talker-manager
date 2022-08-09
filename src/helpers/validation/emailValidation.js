const { checkFieldAgainstNull } = require('./miscValidation');

const checkInvalidEmail = (email) => {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return email.match(emailFormat);
};

const validateEmail = (email) => {
  if (checkFieldAgainstNull(email)) {
    return {
      error: true,
      errorMessage: 'O campo "email" é obrigatório',
    };
  }
  
  if (!checkInvalidEmail(email)) {
    return {
      error: true,
      errorMessage: 'O "email" deve ter o formato "email@email.com"',
    }; 
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  checkInvalidEmail,
  validateEmail,
};
