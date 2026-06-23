const convertToCelsius = function (F) {
  return parseFloat(((F - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (C) {
  return parseFloat((C * 1.8 + 32).toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
