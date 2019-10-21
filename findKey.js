
const findKey = function(obj, callback) {
  let size = Object.keys(obj).length;
  let count = 0;
  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    }
    count++;
  }
  if (count === size) {
    return undefined;
  }
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma'); // Pass

// assertEqual(findKey({
//   "Impreza": { drivetrain: 4},
//   "Corolla": { drivetrain: 2},
//   "Civic": { drivetrain: 2},
//   "Rav4": { drivetrain: 4}
// }, x => x.drivetrain === 2), 'F-150'); // Fail

// assertEqual(findKey({
//   "Impreza": { drivetrain: 4},
//   "Corolla": { drivetrain: 2},
//   "Civic": { drivetrain: 2},
//   "Rav4": { drivetrain: 4}
// }, x => x.drivetrain === 3), 'F-150'); // Fail => undefined

module.exports = findKey;