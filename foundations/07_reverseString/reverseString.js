const reverseString = function (string = "") {
  strArr = string.split("");
  strArr.reverse();
  outPut = "";
  for (char of strArr) {
    outPut += char;
  }
  return outPut;
};
// Do not edit below this line
module.exports = reverseString;
