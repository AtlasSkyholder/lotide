const assertEqual = require('./assertEqual');

let tail = function(words) {
  let newArr = [];
  if (words.length === 1) {
    return [];
  } else if (words.length < 1) {
    return [];
  } else {
    for (let i = 1; i < words.length; i++) {
      newArr.push(words[i]);
    }
  }
  console.log("The new tail array :");
  console.log(newArr);
  return newArr;
};

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//const empty = [];
//const single = ["Stuff"];
//tail(words); // no need to capture the return value since we are not checking it
//tail(empty);
//tail(single);
//assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
