// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let superObj = {};
  let superObjTwo = {};
  superObj = buildObj(object1);  // here sending to buildObj function to flat the object
  superObjTwo = buildObj(object2);
  let objOne = size(superObj);  // here, each object has it's length checked, if the length is different
  let objTwo = size(superObjTwo);  // there is no point checking the further
  let count = 0;
  if(objOne === objTwo){  // if their length is the same, then move forward
    for ( let i in superObj){ // here each key is checked
      if(Array.isArray(superObj[i]) && i in superObjTwo){  // here the value of the key is checked if it's an array
        let arr = compare(superObj[i],superObjTwo[i]);  // here the values of the keys of both objects are sent to a function to compare if they are arrays
        if(arr){  // if they are equal, true is returned and count gets a +1
          count++;
        } else {
          return [false, object1, object2];  // if they arrays are different, false is returned and the check ends here
        }
      } else if(i in superObjTwo && superObj[i] === superObjTwo[i]){ // if they are not arrays but objects, then the key is checked to see if
        count++;                                            // it exists in the 2nd object, then compares both values, if both are
      }                                                     // true then another count is added
    }
    if (objOne === count){  // here checks if the number of coutns, basically the number of checks, equal the object's length, making sure every
      return [true, object1, object2]; // key and value was checked, then returns true
    }
  } else {
    return [false, object1, object2];  // if their length is not the same, returns false
  }
};

const buildObj = function(newObj) {
  let result = {};
  for (let item in newObj) {
    if (!newObj.hasOwnProperty(item)) {
      continue;
    }
    if (typeof newObj[item] == 'object') { // ** building a new object
      let tempRes = buildObj(newObj[item]);
      for (let inc in tempRes) {
        if (!tempRes.hasOwnProperty(inc)) {
          continue;
        }
        result[item + '.' + inc] = tempRes[inc];
      }
    } else {
      result[item] = newObj[item];
    }
  }
  return result;
}

const compare = function(arrOne, arrTwo){
  let num = 0;
  if ( arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++){
      if (arrOne[i] === arrTwo[i]){
        num++;
      } else {
        continue;
      }
    }
  } else {
    return false;
  }
  if(num === arrOne.length){
    return true;
  }
};

const size = function(obj){ // this counts the length of an object
  let count = 0;
  for (let item in obj){
    if(item in obj){
      count++;
    }
  }
  return count;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// //assertEqual(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// //assertEqual(eqObjects(cd, dc)); // => true

// //const cd2 = { c: "1", d: ["2", 3, 4] };
// //assertEqual(eqObjects(cd, cd2)); // => false

// const assertObjectsEqual = function(arr) {
//   // Implement me!
//   let word = arr[0];
//   const inspect = require('util').inspect; // <= add this line
//   if (word) {
//     console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${inspect(arr[1])} === ${inspect(arr[2])}`);
//   } else {
//     console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${inspect(arr[1])} !== ${inspect(arr[2])}`);
//   }
// };

// assertObjectsEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
// assertObjectsEqual(eqObjects({ a: 22, d: { c: 44, f: 90}, g: "hello", l: true}, { a: 22, d: { c: 44, f: 90}, g: "hello", l: true})) // => true

// assertObjectsEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// assertObjectsEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

module.exports = eqObjects;