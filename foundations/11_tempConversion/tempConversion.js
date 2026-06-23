const convertToCelsius = function (F = Number) {
  return parseFloat(((F - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (C = Number) {
  return parseFloat((C * 1.8 + 32).toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
