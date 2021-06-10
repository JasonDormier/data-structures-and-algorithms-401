'use strict';

function anagram(str1, str2) {
  //check to see if both arrays are the same length. IF you return false
  if (str1.length !== str2.length) {
    console.log('false 1', false);
    return false;
  }

  //create an empty object to store and compare string values
  let compare = {};


  //loop through the first string add the letter as a property, if it has no value add 1 else ++
  for (let i = 0; i < str1.length; i++) {

    let letter = str1[i];
    compare[letter] ? compare[letter] += 1 : compare[letter] = 1;
  }
  //loop through the second string add the letter as a property, if it has no value add 1 else ++
  for (let i = 0; i < str2.length; i++) {

    let letter = str2[i];
    //loop through the second string and compare to object if the letter doesn't exsist return a false or if a letter has a 0 exit and return true
    if (!compare[letter]) {

      console.log('false');
      return false;

    } else {

      compare[letter] -= 1;
      console.log(compare);
    }
  }
  return true;
}

function anagramTwo(str, str2){
  if(str.length !== str2.length){
    return false;
  }

  const one = str.split('').sort().join('');
  const two = str2.split('').sort().join('');

  if(one === two)return true;
  else return false;
}

module.exports = {
  'one' : anagram,
  'two' : anagramTwo,
};