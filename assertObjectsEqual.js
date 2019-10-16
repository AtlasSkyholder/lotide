// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let objOne = size(object1);
  let objTwo = size(object2);
  let count = 0;
  if (objOne === objTwo) {
    for (let i in object1) {
      if (Array.isArray(object1[i]) && i in object2) {
        let arr = compare(object1[i],object2[i]);
        if (arr) {
          count++;
        } else {
          return [false, object1, object2];
        }
      } else if (i in object2 && object1[i] === object2[i]) {
        count++;
      }
    }
    if (objOne === count) {
      return [true, object1, object2];
    }
  } else {
    return [false, object1, object2];
  }
};

const compare = function(arrOne, arrTwo) {  //compares the arrays
  let num = 0;
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] === arrTwo[i]) {
        num++;
      } else {
        continue;
      }
    }
  } else {
    return false;
  }
  if (num === arrOne.length) {
    return true;
  }
};

const size = function(obj) { // this counts the length of an object
  let count = 0;
  for (let item in obj) {
    if (item in obj) {
      count++;
    }
  }
  return count;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(arr) {
  // Implement me!
  let word = arr[0];
  const inspect = require('util').inspect; // <= add this line
  if (word) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${inspect(arr[1])} === ${inspect(arr[2])}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${inspect(arr[1])} !== ${inspect(arr[2])}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2)); // => false