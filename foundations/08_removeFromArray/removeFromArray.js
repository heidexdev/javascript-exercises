const removeFromArray = function (arr, ...args) {
  let array = arr;
  function remove() {
    for (const arg of args) {
      for (const item of array) {
        const i = array.indexOf(item);
        if (arg === item) {
          array.splice(i, 1);
        }
      }
      while (array.includes(arg)) {
        remove();
      }
    }


  }
  remove();
  return array;
};
const result = removeFromArray([1, 2, 2, 4], 2);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
