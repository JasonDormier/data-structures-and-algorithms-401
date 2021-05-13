'use strict';

function anagram(str1, str2) {
  //check to see if both arrays are the same length. IF you return false
  if (str1.length !== str2.length) {
    //console.log('false 1', false);
    return false;
  }

  //create two empty objects to store and compare string values
  let compare = {};


  //loop through the first string add the letter as a property, if it has no value add 1 else ++
  for (let i = 0; i < str1.length; i++) {

    let letter = str1[i];
    compare[letter] ? compare[letter] += 1 : compare[letter] = 1;
  }
  //loop through the second string add the letter as a property, if it has no value add 1 else ++
  for (let i = 0; i < str2.length; i++) {

    let letter = str2[i];
    if (!compare[letter]) {
      return false;
    } else {
      compare[letter] -= 1;
    }
  }
  return true;
}

module.exports = anagram;