const eqArrays = function(arrOne, arrTwo) {
  let count = 0;
  if (arrOne.length === arrTwo.length) {  // checks if the arrays are different length
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] === arrTwo[i]) {
        count++;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  if (count === arrOne.length) {
    return true;
  }
};

const assertArraysEqual = function(arrOne, arrTwo) {
  let value = eqArrays(arrOne, arrTwo);
  if (value) {
    console.log("\x1b[32m%s\x1b[0m", "\tPASS ✅ Assertion Passed: The arrays are equal to each other!");
  } else {
    console.log("\x1b[31m%s\x1b[0m", "\tFAIL 🛑 Assertion Failed: The arrays aren't equal to each other!");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);