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

const assertArraysEqual = function(arr) {
  let arrOne = arr[0];
  let arrTwo = arr[1];
  let value = eqArrays(arrOne, arrTwo);
  if (value) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const letterPositions = function(sentence) {
  // logic to update results here
  let objLetter = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === ' '){
      continue;
    } else if (sentence.charAt(i) in objLetter) {
      objLetter[sentence.charAt(i)].push(i);
    } else {
      objLetter[sentence.charAt(i)] = [i];
    }
  }
  return objLetter;
};

const adapter = function(objTest, objStan){
  let key = Object.keys(objStan)[0];
  let arrOne;
  let arrTwo;
  if (key in objTest) {
    arrOne = objStan[key];
    arrTwo = objTest[key];
  }
  return [arrOne, arrTwo];
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(adapter(letterPositions("word"), {w :[0]}));