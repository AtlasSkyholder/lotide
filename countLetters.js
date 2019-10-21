
let countLetters = function(str) {
  let longWord = str.split(' ').join('');
  let objLetter = {};
  for (let single of longWord) {
    if (single in objLetter) {
      objLetter[single] += 1;
    } else {
      objLetter[single] = 1;
    }
  }
  return objLetter;
};

//console.log(countLetters("lighthouse in the house"));

//assertEqual(countLetters("word"), {'w' : 1 , 'o' : 1 , 'r' : 1 , 'd' : 1});

module.exports = countLetters;