'use strict';

const findLongestSubString = require('../findLongestSubString.js');

describe('testing a function that returns the length of the longest substrng with all disctict characters', () => {
  it('It should return a value of the unquie substring', () => {

    const test = findLongestSubString('');
    const test2 = findLongestSubString('rithmschool');
    const test3 = findLongestSubString('thisisawesome');
    const test4 = findLongestSubString('thecatinthehat');
    const test5 = findLongestSubString('bbbbbbbb');
    const test6 = findLongestSubString('longestsubstring');
    const test7 = findLongestSubString('thisishowwedoit');

    expect(test).toEqual(0);
    expect(test2).toEqual(7);
    expect(test3).toEqual(6);
    expect(test4).toEqual(7);
    expect(test5).toEqual(1);
    expect(test6).toEqual(8);
    expect(test7).toEqual(6);
  });
});