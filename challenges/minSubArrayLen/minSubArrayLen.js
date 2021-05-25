'use strict';

function minSubArrayLen(array, target) {

  let minLen = Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (start < array.length) {
    if (sum < target && end < array.length) {
      sum += array[end];
      end++;
    }

    else if (sum >= target) {
      //assign minLen to the smaller value
      minLen = Math.min(minLen, end - start);
      sum -= array[start];
      start++;
    }

    else {
      break;
    }
  }
  // if min length === Infinity return 0 else return minLen
  return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubArrayLen;