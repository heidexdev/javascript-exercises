const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  const sm = a > b ? b : a;
  const bg = a > b ? a : b;
  let rangeArray = [];

  rangeArray.push(sm);
  for (let i = 1; i <= bg - sm; i++) {
    rangeArray.push(sm + i);
  }

  const result = rangeArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return result;
};
// Do not edit below this line
module.exports = sumAll;
