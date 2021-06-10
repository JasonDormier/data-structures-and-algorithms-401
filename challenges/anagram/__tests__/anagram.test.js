'use strict';

const anagram = require('../anagram.js');

describe('Testing anagram function', () => {

  it('Should return true if both objects are empty', () => {
    const test = anagram.one('', '');
    const test2 = anagram.two('', '');
    expect(test).toEqual(true);
    expect(test2).toEqual(true);
  });

  it('Should return false if only one string is empty and the other is undefined', () => {
    const test = anagram.one('', 'aa');
    const test2 = anagram.one('test', '');
    const test3 = anagram.two('', 'aa');
    const test4 = anagram.two('test', '');
    expect(test).toEqual(false);
    expect(test2).toEqual(false);
    expect(test3).toEqual(false);
    expect(test4).toEqual(false);

  });

  it('Should return true if both strings are the same lenth and contain the same number of letters', () => {
    const test = anagram.one('cat', 'tac');
    const test2 = anagram.one('taco', 'coat');
    const test3 = anagram.one('mississippi', 'ssssiiiippm');
    const test4 = anagram.one('samesies', 'samesies');
    const test5 = anagram.two('cat', 'tac');
    const test6 = anagram.two('taco', 'coat');
    const test7 = anagram.two('mississippi', 'ssssiiiippm');
    const test8 = anagram.two('samesies', 'samesies');

    expect(test).toEqual(true);
    expect(test2).toEqual(true);
    expect(test3).toEqual(true);
    expect(test4).toEqual(true);
    expect(test5).toEqual(true);
    expect(test6).toEqual(true);
    expect(test7).toEqual(true);
    expect(test8).toEqual(true);
  });

  it('Should return false if there are two strings but one contains a different amount of letters', () => {
    const test = anagram.one('different', 'diferent');
    const test2 = anagram.two('different', 'diferent');
    expect(test).toEqual(false);
    expect(test2).toEqual(false);

  });
  it('Should return false if there are two strings with the same amount of letters but one or more letters differ between the two strings', () => {

    const test = anagram.one('different', 'diffeeent');
    const test2 = anagram.two('different', 'diffeeent');
    expect(test).toEqual(false);
    expect(test2).toEqual(false);
  });
});