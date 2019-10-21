const tail = require('../tail');
const assertEqual = require('../assertEqual');
const chai = require('chai');

const assert = chai.assert;

describe("tail", function(){
  it("should return an array containing \"Lighthouse\" and \"Labs\"  when passing an array with 3 elements", function(){
    let input = ["Yo Yo", "Lighthouse", "Labs"];
    let output = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), output);
  });

  it("should return empty array when an empty array is passed in ", function(){
    let input = [];
    let output = [];
    assert.deepEqual(tail(input), output);
  });

  it("should return empty array when an array with one element is passed", function(){
    let input = ["Hello"];
    let output = [];
    assert.deepEqual(tail(input), output);
  });
});