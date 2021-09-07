'use strict';
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

//Notice that the solution set must not contain duplicate triplets.
const threeSum = nums => {
    const result = [];
    if(nums.length < 3) return [];

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //output [[-1,-1,2],[-1,0,1]] needs to === 0
console.log(threeSum([]));
console.log(threeSum([0]));


// the conditional will need to create a holder array to push into the results array
//                        
//                     [-1, 0, 1, 2, -1, -4]
//                       i  j  k
//                       i        j   k   