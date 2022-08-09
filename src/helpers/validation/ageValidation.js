const { checkFieldAgainstNull } = require('./miscValidation');

const checkIfAdult = (age) => age >= 18;

const validateAge = (age) => {
  if (checkFieldAgainstNull(age)) {
    return {
      error: true,
      errorMessage: 'O campo "age" é obrigatório',
    };
  }
  
  if (!checkIfAdult(age)) {
    return {
      error: true,
      errorMessage: 'A pessoa palestrante deve ser maior de idade',
    }; 
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  checkIfAdult,
  validateAge,
};
