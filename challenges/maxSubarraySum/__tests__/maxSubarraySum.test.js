'use strict';

const maxSubarraySum = require('../maxSubarraySum.js');

describe('testing a function that finds the maxium sum of a subarray with the length of the the number passed into the function', () => {

  it('should return the value of the given target number with the greatest sum.', () => {
    const test = maxSubarraySum([100, 200, 300, 400], 2);
    const test1 = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
    const test2 = maxSubarraySum([-3, -4, 0, -2, 6, -1], 2);
    const test3 = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
    expect(test).toEqual(700);
    expect(test1).toEqual(39);
    expect(test2).toEqual(5);
    expect(test3).toEqual(5);
  });

  it('should return the value of the given target number with the greatest sum.', () => {
    const test = maxSubarraySum([2, 3], 3);

    expect(test).toEqual(null);
  });
});