'use strict';

const maxConsecutiveOnes = require('../maxConsecutiveOnes')

describe('Given a binary array nums, return the maximum number of consecutive 1s.', () => {

    it('shoud return the number of longest sub-array in the array', () => {

        const test = maxConsecutiveOnes([0, 0, 1, 1, 1, 0, 0]);
        const test2 = maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]);
        const test3 = maxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1]);

        expect(test).toEqual(3);
        expect(test2).toEqual(4);
        expect(test3).toEqual(5);
    })
})





console.log(maxConsecutiveOnes([1,1,0,1,1,1]));
console.log(maxConsecutiveOnes([1,0,1,1,0,1]));