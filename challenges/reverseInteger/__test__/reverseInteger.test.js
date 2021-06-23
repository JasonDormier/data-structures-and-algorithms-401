'use strict';

const reverseInteger = require('../reverseInteger.js');

describe('Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range ', () => {
  it('Should return 0 if the number is larget then 32 bit integer or 0', () => {

    const test = reverseInteger(1534236469);
    const test2 = reverseInteger(-1534236469);
    const test3 = reverseInteger(0);

    expect(test).toEqual(0);
    expect(test2).toEqual(0);
    expect(test3).toEqual(0);

  });
  it('Should return the input number reversed', () => {
    const test = reverseInteger(321);

    expect(test).toEqual(123);


  });
  it('Should return the input number reversed and if it is a negative number it should remain a negative number', () => {

    const test = reverseInteger(-321);

    expect(test).toEqual(-123);

  });



});