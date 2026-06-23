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
  function createRangeArr() {
    rangeArray.push(sm);
    for (let i = 1; i <= bg - sm; i++) {
      rangeArray.push(sm + i);
    }
  }
  createRangeArr();
  const initialValue = 0;
  const result = rangeArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  result;
  return result;
};
const result = sumAll(2, 4);
console.log(result);

// Do not edit below this line
module.exports = sumAll;
