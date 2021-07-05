'use strict';

const mergeSortedArray = require('../mergeSortedArray');


describe(' testing a functiont that should merge two arrays into a single array sorted in non-decreasing order.', () => {
    it('should return the sorted and merged array as a mutated nums1', () => {

        const test = mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

        expect(test).toEqual([ 1, 2, 2, 3, 5, 6 ]);

    });

});