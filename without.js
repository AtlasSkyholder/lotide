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

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without(words, ["world"]));

module.exports = without;