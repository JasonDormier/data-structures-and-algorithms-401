'use strict';

function matchingBrackets(str) {

  const arr = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let replaceStr = str.replace(/[a-zA-Z ]+/g, '');

  for (let i = 0; i < replaceStr.length; i++) {

    if (replaceStr[i] === '(' || replaceStr[i] === '{' || replaceStr[i] === '[') {
      arr[arr.length] = replaceStr[i];

    } else {
      let last = arr.pop();

      if (replaceStr[i] !== map[last]) {
        return false;
      }
    }
  }
  if (arr.length !== 0) {
    return false;
  }
  return true;
}

module.exports = matchingBrackets;