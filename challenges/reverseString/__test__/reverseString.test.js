'use strict';

const reverse = require('../reverseString.js');

describe('Testing the three different functions to reverse a string', () => {
    it('should reverse a string using spread and JavaScript methods', () => {

        const test = reverse.reverse('happy')
        expect(test).toEqual('yppah');
    })
    it('should reverse a string using a for loop', () => {

        const test = reverse.reverse2('happy')
        expect(test).toEqual('yppah');
    })
    it('should reverse a string using recursion', () => {

        const test = reverse.reverse3('happy')
        expect(test).toEqual('yppah');
    })
});