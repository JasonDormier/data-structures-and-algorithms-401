'use strict';

const minSubArrayLen = require('../minSubArrayLen.js');

describe('The function should return the minimal length of a contiguous subarray of which the sum is greater or equal to the target number.', () => {

  it('Should return the length of the smallest subarray to equal the target number', () => {

    const test = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
    const test2 = minSubArrayLen([2, 1, 6, 5, 4], 9);
    const test3 = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
    const test4 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
    const test5 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
    const test6 = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);

    expect(test).toEqual(2);
    expect(test2).toEqual(2);
    expect(test3).toEqual(1);
    expect(test4).toEqual(3);
    expect(test5).toEqual(5);
    expect(test6).toEqual(2);
  });
  it('Should return 0 if there is not a sub array that equals the target', () => {

    const test = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);

    expect(test).toEqual(0);
  });
});