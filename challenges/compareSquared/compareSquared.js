'use strict';

function samesiesSqr(arr1, arr2) {

  //check to see if both arrays are the same length. IF you return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //create two empty objects to store and compare array values
  let freqCounter1 = {};
  let freqCounter2 = {};

  //loop through the first array add the val as a property, if it has no value add 1 else ++
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  //loop through the first array add the val as a property, if it has no value add 1 else ++
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  //loop through the properties in freqCounter1
  for (let key in freqCounter1) {

    //if the key in freqCounter2 is not a squared return false
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    //compare the values in both objects
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

samesiesSqr([2, 4, 2], [4, 16, 4]);