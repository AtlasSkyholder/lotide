const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }

};

let head = function(arr){
  if (arr === undefined){
    console.log("One of the variables is empty. Can't run the test");
  } else {
    return arr[0];
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 2);
assertEqual(head(undefined), "String is a String");