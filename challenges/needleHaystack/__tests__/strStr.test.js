'use strict';

const strStr = require('../strStr');

describe('Testing a function that should Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', () => {

    it('should return the starting index of the needle', () => {

        const test = strStr('hello', 'll');
        const test2 = strStr('a', 'a')

        expect(test).toEqual(2);
        expect(test2).toEqual(0);
    });

    it('should return -1 if there is not matching needle in the haystack', () => {

        const test = strStr('aaaaaa', 'baa');
        const test2 = strStr('', 'a');

        expect(test).toEqual(-1);
        expect(test2).toEqual(-1);

    });

    it('should return 0 if there is no haystack or if there is no needle', () => {
        
        const test = strStr('', '');
        const test2 = strStr('a', '');

        expect(test).toEqual(0);
        expect(test2).toEqual(0);

    })


});
console.log()//2
console.log()//-1
console.log()//0
console.log()//-1
console.log()//0
console.log()//0