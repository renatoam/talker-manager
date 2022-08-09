const { checkFieldAgainstNull, checkInvalidDate } = require('./miscValidation');

const validateWatchedAt = (date) => {
  if (checkFieldAgainstNull(date)) {
    return {
      error: true,
      errorMessage: 'O campo "watchedAt" é obrigatório',
    };
  }
  
  if (!checkInvalidDate(date)) {
    return {
      error: true,
      errorMessage: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    }; 
  }

  return {
    error: false,
    errorMessage: null,
  };
};

module.exports = {
  validateWatchedAt,
};
