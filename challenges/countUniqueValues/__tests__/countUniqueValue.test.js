'use strict';

const countUniqueValues = require('../countUniqueValues.js');


describe('Testing the countingUniqueValues function ', () => {

  it('Should return the number of unique values in the array.', () => {

    const test1 = countUniqueValues([1, 1, 1, 1, 1, 2]);
    const test2 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
    const test3 = countUniqueValues([-2, -1, -1, 0, 1]);
    const test4 = countUniqueValues([]);
    expect(test1).toEqual(2);
    expect(test2).toEqual(7);
    expect(test3).toEqual(4);
    expect(test4).toEqual(0);
  });
});