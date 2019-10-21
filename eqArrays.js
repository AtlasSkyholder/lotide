const assertEqual = require('./assertEqual');

const eqArrays = function(arrOne, arrTwo) {
  let count = 0;
  let superArr = buildArr(arrOne);
  let superArrTwo = buildArr(arrTwo);
  if (superArr.length === superArrTwo.length) {  // checks if the arrays are different length
    for (let i = 0; i < superArr.length; i++) {
      if (superArr[i] === superArrTwo[i]) {
        count++;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  if (count === superArr.length) {
    return true;
  }
};

const buildArr = function(array) {
  let result = [];
  array.forEach(function(value) {
    if(Array.isArray(value)) {
        result = result.concat(buildArr(value));
    } else {
        result.push(value);
    }
  });

return result;
};

module.exports = eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// console.log(eqArrays([1, 2, [3, 4]], [1, 2, [3, 4]]))

