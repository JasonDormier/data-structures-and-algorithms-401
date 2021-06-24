'use strict';

const isPalindrome = require('../palindromeNumber');


describe('An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not', () => {
  it('should return true if the number is a palindrome', () => {

    const test = isPalindrome(121);

    expect(test).toEqual(true);

  });
  it('should return false if the number is not a palindrome', () => {

    const test = isPalindrome(12);

    expect(test).toEqual(false);

  });
  it('should return false if the number is a negative number', () => {

    const test = isPalindrome(-121);

    expect(test).toEqual(false);

  });
});