'use strict';

//recursion has the - 1 in the recursion call. f(n-1)
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function factorial(num) {

  if (num === 1) return 1;
  return num + factorial(num - 1);
}

module.exports = power, factorial;