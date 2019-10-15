const eqArrays = function(arrOne, arrTwo) {
  let count = 0;
  let midOne = middle(arrOne);
  let midTwo = middle(arrTwo);
  if (midOne.length === midTwo.length) {  // checks if the arrays are different length
    for (let i = 0; i < midOne.length; i++) {
      if (midOne[i] === midTwo[i]) {
        count++;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  if (count === midOne.length) {
    return true;
  }
};

const assertArraysEqual = function(arrOne, arrTwo) {
  let value = eqArrays(arrOne, arrTwo);
  if (value) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], ["a", "b", "c"]);