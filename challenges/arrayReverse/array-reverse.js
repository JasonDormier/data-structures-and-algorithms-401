'use strict';

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //result.push(arr[i]);
    result[result.length] = arr[i];
  }
  return result;
}

module.exports = reverseArray;