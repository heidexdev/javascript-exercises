const palindromes = function (string) {
  const splitString = string
    .replaceAll(".", "")
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .split("");

  const isEven = splitString.length % 2 === 0;

  if (!isEven) {
    const middleIndex = Math.floor(splitString.length / 2);
    splitString.splice(middleIndex, 1);
  }

  const firstHalfSplit = splitString.splice(0, splitString.length / 2);
  splitString.reverse();

  const isPalindromes = () => {
    for (let i = 0; i < firstHalfSplit.length; i++) {
      if (firstHalfSplit[i] !== splitString[i]) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  };
  const result = isPalindromes();
  return result;
};
const result = palindromes("A car, a man, a maraca.");
// console.log(result);

// Do not edit below this line
module.exports = palindromes;
