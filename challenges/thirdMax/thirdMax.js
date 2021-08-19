'use strict';

const thirdMax = (nums) => {
    //sort the numbers 
    //if nums less then 3 return max
    //else return the third num in the array

    const result = [...new Set(nums.sort((a, b) =>  b - a ))];
    return result.length < 3 ? result[0] : result[2];

}

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 1]));
console.log(thirdMax([9, 3, 4, 3, 2, 4, 5, 6, 6, 3, 98, 21, 2, 1, 23, 3, 44546, 344, 5, 44, 345, 43]));
console.log(thirdMax([1,1,2]));