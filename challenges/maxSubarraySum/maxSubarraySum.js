'use strict';

function maxSubarraySum(array, target) {

  let maxSum = 0;
  let tempSum = 0;

  if (array.length < target) return null;
  //create a window in the array and check the sums
  for (let i = 0; i < target; i++) {
    maxSum += array[i];
  }

  //assign maxSum to tempSum to use in logic
  tempSum = maxSum;

  //loop through the array 
  for (let i = target; i < array.length; i++) {

    //subtract the prvious number from tempsum move the window and add the next number
    tempSum = tempSum - array[i - target] + array[i];
    if (maxSum < tempSum) maxSum = tempSum;
  }
  return maxSum;

}

module.exports = maxSubarraySum;