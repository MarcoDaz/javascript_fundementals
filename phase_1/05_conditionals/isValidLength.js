const isValidLength = (phoneNumber) => {
  const validLength = 10;
  return phoneNumber.length == validLength;
};

module.exports = isValidLength;