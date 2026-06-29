const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, currentNum) => {
    total += currentNum;
    return total;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, currentNum) => {
    total *= currentNum;
    return total;
  });
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
