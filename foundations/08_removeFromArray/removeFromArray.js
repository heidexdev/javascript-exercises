const removeFromArray = function (arr, ...args) {
  let array = arr;
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === args[0]) {
  //     array.splice(i, 1);
  //   }
  // }
  for (const arg of args) {
    for (const item of array) {
      const i = array.indexOf(item);
      if (arg === item) {
        array.splice(i, 1);
      }
    }
  }
  console.log(args[0], args[1]);

  return array;
};
const result = removeFromArray([1, 2, 2, 4], 2);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
