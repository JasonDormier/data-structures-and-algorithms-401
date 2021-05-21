'use strict';

const isSubsequence = require('../isSubsequence.js');

describe('Testing a function isSubsequence which takes in two strings and checks wehterh the characters in the first string form a subsequence of the characters in the second string.', () => {


  it('Should return true if the characters in the first string form a subsequence in the second string', () => {

    const test = isSubsequence('hello', 'hello world');
    const test2 = isSubsequence('sing', 'sting');
    const test3 = isSubsequence('abc', 'abracadabra');

    expect(test).toEqual(true);
    expect(test2).toEqual(true);
    expect(test3).toEqual(true);

  });

  it('Should return false if the characters in the first string do not form a subsequence in the second string', () => {

    const test = isSubsequence('abc', 'acb');

    expect(test).toEqual(false);
  });
});
