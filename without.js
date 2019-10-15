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
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const without = function(source, itemsToRemove) {
  let newSource = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newSource.length; j++) {
      if (newSource[j] === itemsToRemove[i]) {
        newSource.splice(j, 1);
      }
    }
  }
  return newSource;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(words, ["world"]));