'use strict';

function isSubsequence(s, t) {

  let i = 0;
  let j = 0;

  if (!s) {
    return true;
  }
  //while j is less the t length keep iterating
  while (j < t.length) {
    //if t[j] is strictly equal to the letter in str[1] iterate i to the next charcter for the next sequence check.
    if (t[j] === s[i]) {
      i++;
    }
    //if we reached the end of s then we have reached all the characters in sequence
    if (i === s.length) {
      return true;
    }
    j++;
  }
  return false;
}

module.exports = isSubsequence;