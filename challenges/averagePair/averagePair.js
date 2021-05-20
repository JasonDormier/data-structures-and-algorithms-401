'use strict';
function averagePair(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let average = (arr[i] + arr[j]) / 2;
    if (average === target) {
      return true;
    }
    // if the average drops below the target value we can move i to the next value due to the array being sorted, no of the remaining values average to equal the target.
    else if (average < target) {
      i++;
    }
    else {
      j--;
    }
  }
  return false;
}

module.exports = averagePair;