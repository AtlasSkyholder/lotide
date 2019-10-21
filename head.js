const assertEqual = require('./assertEqual');

let head = function(arr){
  if (arr === undefined){
    console.log("One of the variables is empty. Can't run the test");
  } else {
    return arr[0];
  }
};

module.exports = head;

// TEST CODE
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([7]), 2);
//assertEqual(head(undefined), "String is a String");