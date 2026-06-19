const removeFromArray = function (arr, ...args) {
  let array = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === args[0]) {
      array.splice(i,1);
    }
  }
  return array;
};
const result = removeFromArray([1, 2, 3, 4], 3);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
