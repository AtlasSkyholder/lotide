
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

module.exports = flatten;


//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);