const repeatString = function (string, num) {
  let outPut = "";
  for (let i = 0; i < num; i++) {
    outPut += string;
  }
  console.log(outPut);
  return outPut;
};
// Do not edit below this line
module.exports = repeatString;
