'use strict';

const power = require('../power.js');
const factorial = require('../factorial.js');

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