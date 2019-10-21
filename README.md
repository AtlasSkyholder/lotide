# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @atlasskyholder/lotide`

**Require it:**

`const _ = require('@atlasskyholder/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: takes in an array and returns the first element
* `tail`: takes in an array and returns the array without the first element. If the array only had one element then it returns an empty array. If it's empty, it returns an empty array
* `middle`: takes in array and returns middle part.
* `countLetters`: takes a string and returns an object with each letter and how many times it appears
* `countOnly`: takes in an array of names and an object with names to compare too, and returns an object with the names that appeared and how many times it appeared.
* `findKey`: takes in a nested object and a value for the key of that nested object and returns the key that matches that nested object
* `findKeyByValue`: takes in an object and a value and returns the key that matches that value
* `flatten`: takes in a nested array and flattens it
* `letterPositions`: takes is a string and returns an object with each letter and its position, if it appears in multiple places then the letter will have an array
* `map`: takes in an array and a function on how to manipulate that array and adds that array according to that function
* `takeUntil`: takes in an array and a function, that function will tell takeUntil to create a new array with only the desired elements
* `without`: takes in an array and a list of desired elements to be removed, returns a new array with the elements that weren't removed.
* `eqArrays`: takes in two arrays, compares them and returns true is they are equal
* `eqObjects`: takes in two objects, compares them, and then returns a true or false, plus the objects