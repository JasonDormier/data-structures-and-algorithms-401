'use strict';

const longestPrefix = require('../longestPrefix');

describe('testing a function that returns the matching prefix for each string in an array.', () => {
    it('should return the matching letters that are the same for all words in the array.', () => {

        const test = longestPrefix(["flower", "flow", "flight"]);
        const test2 = longestPrefix(['a']);
        expect(test).toEqual('fl');
        expect(test2).toEqual('a');
    })


    it('should return an empty string if the array is empty', () => {

        const test = longestPrefix(['']);
        
        expect(test).toEqual('');

    })
})