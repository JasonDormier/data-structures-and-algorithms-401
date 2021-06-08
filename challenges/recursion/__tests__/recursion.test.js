'use strict';

const power = require('../power.js');
const factorial = require('../factorial.js');
const productOfArray = require('../productOfArray.js');
const reverseString = require('../reverseString.js')

describe('tests for the function power, use recursion to find the exponent of a base number', () => {
  it('should return the power of the base number ', () => {

    const test = power(2, 0);
    const test2 = power(2, 2);
    const test3 = power(2, 4);

    expect(test).toEqual(1);
    expect(test2).toEqual(4);
    expect(test3).toEqual(16);

  });
});

describe('tests for the factorial, use recursion to find the factorial  of a  number', () => {
  it('should return the power of the base number ', () => {

    const test = factorial(1);
    const test2 = factorial(2);
    const test3 = factorial(4);
    const test4 = factorial(7);

    expect(test).toEqual(1);
    expect(test2).toEqual(2);
    expect(test3).toEqual(24);
    expect(test4).toEqual(5040);

  });
});

describe('tests for the product of an array, using recursion to find the product of an array', () => {
  it('should return the product of the array ', () => {

    const test = productOfArray([1,2,3]);
    const test2 = productOfArray([1,2,3,10]);

    expect(test).toEqual(6);
    expect(test2).toEqual(60);
  });
});

describe('tests for the function to reverse a string using recursion.', () => {
  it('should return a string reversed ', () => {

    const test = reverseString('This is how you reverse a string with recursion');

    expect(test).toEqual('noisrucer htiw gnirts a esrever uoy woh si sihT');
  });
});