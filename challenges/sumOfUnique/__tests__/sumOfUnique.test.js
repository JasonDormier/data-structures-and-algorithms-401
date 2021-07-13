'use strict';

const sumOfUnique = require('../sumOfUnique');

describe('You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.', () => {

    it('should return the sum of the unique elements in the array', () => {

        const test = sumOfUnique([1, 2, 3, 2]);
        const test2 = sumOfUnique([1, 1, 1, 1, 1]);
        const test3 = sumOfUnique([1, 2, 3, 4, 5]);
        const test4 = sumOfUnique([10, 6, 9, 6, 9, 6, 8, 7])

        expect(test).toEqual(4);
        expect(test2).toEqual(0);
        expect(test3).toEqual(15);
        expect(test4).toEqual(25);

    });
});
