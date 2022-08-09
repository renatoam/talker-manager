const { validateAge } = require('./ageValidation');
const { validateName } = require('./nameValidation');
const { validateRate } = require('./rateValidation');
const { validateTalk } = require('./talkValidation');
const { validateWatchedAt } = require('./watchedAtValidation');

const validateTalker = (talker) => new Promise((resolve, reject) => {
  const validation = {
    name: validateName(talker.name),
    age: validateAge(talker.age),
    talk: validateTalk(talker.talk),
    rate: talker.talk && validateRate(talker.talk.rate),
    watchedAt: talker.talk && validateWatchedAt(talker.talk.watchedAt),
  };

  Object.keys(validation).forEach((key) => {
    if (validation[key].error) {
      reject(validation[key].errorMessage);
    }
  });

  resolve();
});

module.exports = {
  validateTalker,
};
