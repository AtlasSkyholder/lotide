
const findKeyByValue = function(objTv, tvShow){
  let genre;
  for ( let item in objTv){
    if(objTv[item] === tvShow){
      genre = item;
    }
  }
  return genre;
};

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// //console.log(findKeyByValue(bestTVShowsByGenre, "comedy"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;