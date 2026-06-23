const sumAll = function (min, max) {
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  let rangeArray = [];

  rangeArray.push(min);
  for (let i = 1; i <= max - min; i++) {
    rangeArray.push(min + i);
  }

  const result = rangeArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return result;
};
// Do not edit below this line
module.exports = sumAll;
