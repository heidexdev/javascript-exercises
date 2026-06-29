const palindromes = function (string) {
  const splitString = string.trim().split("");
  const isEven = splitString.length % 2 === 0;

  if (!isEven) {
    const middleIndex = Math.floor(splitString.length / 2);
    splitString.splice(middleIndex, 1);
  }

  const firstHalfSplit = splitString.splice(0, splitString.length / 2);
  splitString.reverse();

  function isPalindromes(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        continue;
      }
    }
  }
  return true;
};
const result = palindromes("racecar");
console.log(result);

// Do not edit below this line
module.exports = palindromes;
