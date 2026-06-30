const getTheTitles = function (array) {
  let titles = [];
  array.map((book) => {
    titles.push(book.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
