const fibonacci = function (position) {
  const positionValid = Number(position);
  if (positionValid < 0) return "OOPS";
  if (positionValid === 0) return 0;
  if (positionValid < 3) return 1;
  let prev = 1;
  let current = 1;
  let next = 0;
  for (let i = 3; i <= positionValid; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};
const result = fibonacci(-1);
console.log(result);

// Do not edit below this line
module.exports = fibonacci;
