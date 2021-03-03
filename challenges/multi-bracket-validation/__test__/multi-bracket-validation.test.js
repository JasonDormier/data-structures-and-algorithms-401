'use strict';
const bracketTest = require('../multi-bracket-validation.js');

describe('Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:', () => {
  it('should return true if the input string has both pairs of {}, [], or () brackets', () => {

    const testOne = bracketTest('{}');
    const testtwo = bracketTest('{}(){}');
    const testthree = bracketTest('()[[Extra Characters]]');
    const testfour = bracketTest('(){}[[]]');
    const testfive = bracketTest('{}{Code}[Fellows](())');

    expect(testOne).toBe(true);
    expect(testtwo).toBe(true);
    expect(testthree).toBe(true);
    expect(testfour).toBe(true);
    expect(testfive).toBe(true);

  });
  it('should return false if the input string has both pairs of {}, [], or () brackets', () => {

    const testOne = bracketTest('[({}]');
    const testtwo = bracketTest('(](');
    const testthree = bracketTest('{(})');

    expect(testOne).toBe(false);
    expect(testtwo).toBe(false);
    expect(testthree).toBe(false);
  });
});