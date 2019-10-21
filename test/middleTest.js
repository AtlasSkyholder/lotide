const middle = require('../middle');
const assertEqual = require('../assertEqual');
const chai = require('chai');

const assert = chai.assert;

describe("middle", function(){
  it("should return true when passing an array with 3 elements", function(){
    let input = [1, 2, 3];
    let output = [2];
    assert.deepEqual(middle(input), output);
  });

});
