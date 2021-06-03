'use strict';

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function factorial(num) {

  if (num === 1) return 1;
  return num + factorial(num - 1);
}

module.exports = power, factorial;