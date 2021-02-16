'use strict';

const insertShiftArray = require('../array-shift.js');

describe('testing to see if number was placed inserted in middle of the array', () => {
  it('should return an array with an number inserted into the middle', () => {
    const insertShift = insertShiftArray([2, 4, 6, 8], 5);
    const insertShiftTwo = insertShiftArray([4, 8, 15, 23, 42], 16);

    expect(insertShift).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftTwo).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
