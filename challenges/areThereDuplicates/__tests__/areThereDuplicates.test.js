'use strict';

const areThereDuplicates = require('../areThereDuplicates.js');


describe('Testing the areThereDuplicate function that takes in n amount of arguments and checks to see if there are any duplicates', () => {

  it('Should return true if there are duplicate arguments', () => {

    const test1 = areThereDuplicates(1, 2, 2);
    const test2 = areThereDuplicates('a', 'b', 'c', 'a');

    expect(test1).toEqual(true);
    expect(test2).toEqual(true);

  });

  it('should return false if there are no duplcates in the arguments', () => {

    const test1 = areThereDuplicates(1, 2, 3);
    expect(test1).toEqual(false);
  });
});