'use strict';

function reverseInteger(x) {
  let str = x.toString();
  let newStr = '';

  if (x === 0) return 0;

  else if (x < 0) {
    x * -1;
    str = x.toString();
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    if (parseInt(newStr) * -1 < -(2 ** 31)) return 0;
    return parseInt(newStr) * -1;
  }
  else {

    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    if (parseInt(newStr) > 2 ** 31 - 1) return 0;
    return parseInt(newStr);
  }
}

module.exports = reverseInteger;