'use strict';

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    //get the average of the start and end
    let middle = Math.floor((start + end) / 2);

    //if the middle pointer === the key
    if (sortedArray[middle] === key) {
      //key found
      return middle;

    } 
    else if (sortedArray[middle] < key) start = middle + 1;
    else end = middle - 1;
  }
  //key not found
  return -1;
}

module.exports = binarySearch;