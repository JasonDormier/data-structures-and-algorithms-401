'use strict';

const averagePair = require('../averagePair.js');

describe('Given a sorted array of intergets and a target average, determine if there is a pair of values in the array where the average of the pair equals the target.', () => {
  it('Should return true if the two pairs equal the target value ', () => {

    const test = averagePair([1, 2, 3], 2.5);
    const test2 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

    expect(test).toEqual(true);
    expect(test2).toEqual(true);
  });
  it('Should return false if the two pairs do not equal the target value ', () => {

    const test = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
    const test2 = averagePair([], 4);

    expect(test).toEqual(false);
    expect(test2).toEqual(false);
  });
});