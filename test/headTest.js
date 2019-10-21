const head = require('../head');
const assertEqual = require('../assertEqual');
const chai = require('chai');

const assert = chai.assert;

describe("head", function(){
  it("should return 5 when passed an array of 5, 6, 7", function(){
    let input = [5, 6, 7];
    let output = 5;
    assert.strictEqual(head(input), output);
  });

  it("should return 'Hello' when passing an array of strings 'Hello', 'Lighthouse' ", function(){
    let input = ["Hello", "Lighthouse", "Labs"];
    let output = "Hello";
    assert.strictEqual(head(input), output);
  });
});

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([7]), 2);
// assertEqual(head(undefined), "String is a String");