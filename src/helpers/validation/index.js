const ageValidation = require('./ageValidation');
const rateValidation = require('./rateValidation');
const talkValidation = require('./talkValidation');
const nameValidation = require('./nameValidation');
const miscValidation = require('./miscValidation');
const emailValidation = require('./emailValidation');
const talkerValidation = require('./talkerValidation');
const passwordValidation = require('./passwordValidation');
const watchedAtValidation = require('./watchedAtValidation');

module.exports = {
  ...ageValidation,
  ...talkValidation,
  ...rateValidation,
  ...nameValidation,
  ...miscValidation,
  ...emailValidation,
  ...talkerValidation,
  ...passwordValidation,
  ...watchedAtValidation,
};