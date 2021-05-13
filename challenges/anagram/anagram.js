'use strict';

function anagram(str1, str2) {
  //check to see if both arrays are the same length. IF you return false
  if (str1.length !== str2.length) {
    //console.log('false 1', false);
    return false;
  }

  //create two empty objects to store and compare array values
  let anagram1 = {};
  let anagram2 = {};

  //loop through the first array add the val as a property, if it has no value add 1 else ++
  for (let val of str1) {
    anagram1[val] = (anagram1[val] || 0) + 1;
  }

  //loop through the first array add the val as a property, if it has no value add 1 else ++
  for (let val of str2) {
    anagram2[val] = (anagram2[val] || 0) + 1;
  }

  //loop through the properties in anagram1
  for (let key in anagram1) {
    //if squared key in anagram2 doesn't have the same key number as anagram1 return false
    if (!(key in anagram2)) {
      return false;
    }
  }
  return true;
}

module.exports = anagram;