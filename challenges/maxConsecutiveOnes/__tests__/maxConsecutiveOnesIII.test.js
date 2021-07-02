'use strict';

const maxConsecutiveOnesIII = require('../maxConsecutiveOnesIII')

describe('Given a binary array nums and an integer k, return the maximum number of consecutive 1s in the array if you can flip at most k 0s', () => {

    it('shoud return the number of longest sub-array in the array', () => {

        const test = maxConsecutiveOnesIII([0, 0, 1, 1, 1, 0, 0], 0);
        const test2 = maxConsecutiveOnesIII([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
        const test3 = maxConsecutiveOnesIII([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);

        expect(test).toEqual(3);
        expect(test2).toEqual(6);
        expect(test3).toEqual(10);
    })
})