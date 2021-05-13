'use strict';

const anagram = require('../anagram.js');

describe('Testing anagram function', () => {

  it('Should return true if both objects are empty', () => {
    const test = anagram('', '');
    expect(test).toEqual(true);
  });

  it('Should return false if only one string is empty and the other is undefined', () => {
    const test = anagram('', 'aa');
    const test2 = anagram('test', '');
    expect(test).toEqual(false);
    expect(test2).toEqual(false);

  });

  it('Should return true if both strings are the same lenth and contain the same number of letters', () => {
    const test = anagram('cat', 'tac');
    const test2 = anagram('taco', 'coat');
    const test3 = anagram('mississippi', 'ssssiiiippm');
    const test4 = anagram('samesies', 'samesies');

    expect(test).toEqual(true);
    expect(test2).toEqual(true);
    expect(test3).toEqual(true);
    expect(test4).toEqual(true);
  });

  it('Should return false if there are two strings but one contains a different amount of letters', () => {
    const test = anagram('different', 'diferent');
    expect(test).toEqual(false);

  });
  it('Should return false if there are two strings with the same amount of letters but one or more letters differ between the two strings', () => {

    const test = anagram('different', 'diffeeent');
    expect(test).toEqual(false);
  });
});