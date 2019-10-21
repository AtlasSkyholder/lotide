// assertEqual.js

const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 2);
assertEqual(head(undefined), "String is a String");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const empty = [];
const single = ["Stuff"];
tail(words); // no need to capture the return value since we are not checking it
tail(empty);
tail(single);
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["3", "2", "1"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3]), [1, 2, true, 4]);
assertArraysEqual(middle([1, 2, 3]), ["a", "b", "c"]);

module.exports = assertEqual;