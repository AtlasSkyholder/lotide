
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

// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(adapter(letterPositions("word"), {w :[0]}));

module.exports = letterPositions;