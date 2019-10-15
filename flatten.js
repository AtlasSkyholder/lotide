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

const flatten = function(list) {
  for (let i = 0; i < list.length; i++) {  //this runs the length of the array
    let tempArray = [];
    let spot = 0;
    if (Array.isArray(list[i])) {  // this checks if the array is an array
      tempArray = list[i];         // copies the array inside the array
      spot = list.indexOf(tempArray); // copies the spot
      list.splice(spot, 1);           // splices the array out
    }
    if (tempArray.length > 1) {         // checks if that inner array is longer than 1
      for (let j = 0; j < tempArray.length; j++) { // runs through the inner array to add elements individually
        list.splice(spot, 0, tempArray[j]);
        spot++;
      }
    } else if (tempArray.length === 1) { // for arrays as long as 1
      list.splice(spot, 0, tempArray[0]);
    }
  }
  return list;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]));