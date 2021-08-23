'use strict';

const isPalinedrome = function (x) {

  let reverse = Math.abs(x).toString().split('').reverse().join('');
  reverse = parseInt(reverse);

  if (x < 0) return false;
  return x === reverse ? true : false;
  // if (x === reverse) return true;

  // return false;
};

module.exports = isPalinedrome;

