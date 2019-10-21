const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
//   let count = 0;
//   if (arrOne.length === arrTwo.length) {  // checks if the arrays are different length
//     for (let i = 0; i < arrOne.length; i++) {
//       if (arrOne[i] === arrTwo[i]) {
//         count++;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   if (count === arrOne.length) {
//     return true;
//   }
// };
  let result = eqArrays(arrOne, arrTwo);
  return assertEqual(result, true);
};



module.exports = assertArraysEqual;