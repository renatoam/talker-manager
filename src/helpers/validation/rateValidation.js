const { checkFieldAgainstNull } = require('./miscValidation');

const checkRightRangeForRate = (rate) => rate <= 5 && rate >= 1;
const checkIfRateIsInteger = (rate) => Number.isInteger(rate);

const validateRate = (rate) => {
  if (checkFieldAgainstNull(rate) && rate !== 0) {
    return {
      error: true,
      errorMessage: 'O campo "rate" é obrigatório',
    };
  }

  if (!checkRightRangeForRate(rate) || !checkIfRateIsInteger(rate)) {
    return {
      error: true,
      errorMessage: 'O campo "rate" deve ser um inteiro de 1 à 5',
    }; 
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  validateRate,
};
