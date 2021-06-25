'use strict';

const romanToInt = require('../romanToInteger');

describe('Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M testing function to turn roman numerals into integers', () => {
  it('should return the correct number in base bases I, V, X, L, C, D, M', () => {

    const test = romanToInt('I');
    const test2 = romanToInt('V');
    const test3 = romanToInt('X');
    const test4 = romanToInt('L');
    const test5 = romanToInt('C');
    const test6 = romanToInt('D');
    const test7 = romanToInt('M');

    expect(test).toEqual(1);
    expect(test2).toEqual(5);
    expect(test3).toEqual(10);
    expect(test4).toEqual(50);
    expect(test5).toEqual(100);
    expect(test6).toEqual(500);
    expect(test7).toEqual(1000);
  });

  it('should return the correct number with a combination of roman numerals', () => {

    const test = romanToInt('III');
    const test2 = romanToInt('VI');
    const test3 = romanToInt('XIII');
    const test4 = romanToInt('XV');
    const test5 = romanToInt('XXX');

    expect(test).toEqual(3);
    expect(test2).toEqual(6);
    expect(test3).toEqual(13);
    expect(test4).toEqual(15);
    expect(test5).toEqual(30);
  });

  it('should return the correct number in tricky instances where the proceeding letter dictates the numbers output', () => {

    const test = romanToInt('IV');
    const test2 = romanToInt('IX');
    const test3 = romanToInt('XL');
    const test4 = romanToInt('ML');
    const test5 = romanToInt('MCMXCIV');
    const test6 = romanToInt('LVIII');

    expect(test).toEqual(4);
    expect(test2).toEqual(9);
    expect(test3).toEqual(40);
    expect(test4).toEqual(1050);
    expect(test5).toEqual(1994);
    expect(test6).toEqual(58);
  });
});