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

// I did not know there is a operator ** LOL :D
const power = function (base, exponent) {
  let baseArray = [];
  for (let i = 0; i < exponent; i++) {
    baseArray.push(base);
  }
  return baseArray.reduce((total, currentNum) => {
    total *= currentNum;
    return total;
  });
};

const factorial = function (num) {
  let numToDown = [1];
  for (let i = num; i > 0; i--) {
    numToDown.push(i);
  }
  return numToDown.reduce((total, currentNum) => {
    total *= currentNum;
    return total;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
