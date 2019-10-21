//const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);

// console.log(results1);

// assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);

module.exports = map;