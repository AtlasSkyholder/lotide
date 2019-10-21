const assertEqual = require('./assertEqual');

const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    midArray.push(array[array.length / 2 - 1]);
    midArray.push(array[array.length / 2]);
  } else {
    midArray.push(array[Math.floor(array.length / 2)]);
  }
  return midArray;
};

module.exports = middle;
