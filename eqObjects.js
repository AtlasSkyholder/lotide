// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertEqual = function(arr) {

  let word = arr[0];
  if (word) {
    console.log(`Assertion Passed: ${JSON.stringify(arr[1])} === ${JSON.stringify(arr[2])}`);
  } else {
    console.log(`Assertion Failed: ${JSON.stringify(arr[1])} !== ${JSON.stringify(arr[2])}`);
  }
};

const eqObjects = function(object1, object2) {
  let objOne = size(object1);
  let objTwo = size(object2);
  let count = 0;
  if(objOne === objTwo){
    for ( let i in object1){
      if(Array.isArray(object1[i]) && i in object2){
        let arr = compare(object1[i],object2[i]);
        if(arr){
          count++;
        } else {
          return [false, object1, object2];
        }
      } else if(i in object2 && object1[i] === object2[i]){
        count++;
      }
    }
    if (objOne === count){
      return [true, object1, object2];
    }
  } else {
    return [false, object1, object2];
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false