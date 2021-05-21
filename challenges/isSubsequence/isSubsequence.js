'use strict';

function isSubsequence(str1, str2) {

  let i = 0;
  let j = 0;

  if (!str1) {
    return true;
  }
  //while j is less the str2 length keep iterating
  while (j < str2.length) {
    //if str2[j] is strictly equal to the letter in str[1] iterate i to the next charcter for the next sequence check.
    if (str2[j] === str1[i]) {
      i++;
    }
    //if we reached the end of str1 then we have reached all the characters in sequence
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

module.exports = isSubsequence;