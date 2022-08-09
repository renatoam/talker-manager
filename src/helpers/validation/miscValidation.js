const checkFieldAgainstNull = (field) => !field;
const checkInvalidDate = (date) => {
  const dateFormat = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  return date.match(dateFormat);
};

module.exports = {
  checkFieldAgainstNull,
  checkInvalidDate,
};
