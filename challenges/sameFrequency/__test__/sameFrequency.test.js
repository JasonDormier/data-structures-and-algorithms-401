'use strict';

const sameFrequency = require('../sameFrequency.js');


describe('Testing the countingUniqueValues function ', () => {

  it('Should return true if the frequency of numbers is the same.', () => {

    const test1 = sameFrequency(182, 281);
    const test2 = sameFrequency(3589578, 5879385);
    expect(test1).toEqual(true);
    expect(test2).toEqual(true);

  });

  it('Should return false if the frequency of numbers is not the same.', () => {

    const test1 = sameFrequency(34, 14);
    expect(test1).toEqual(false);

  });

  it('Should return false if the numbers are not the same length.', () => {

    const test1 = sameFrequency(12, 122);
    expect(test1).toEqual(false);

  });
});