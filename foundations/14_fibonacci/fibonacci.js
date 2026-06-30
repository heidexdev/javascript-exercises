const fibonacci = function (position) {
  let prev = 1;
  let current = 1;
  let next = 0;
  for (let i = 3; i <= position; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};
const result = fibonacci(5);
console.log(result);

// Do not edit below this line
module.exports = fibonacci;
