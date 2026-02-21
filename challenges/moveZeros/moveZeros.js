'use strict';

var moveZeroes = function(nums) {

    if (nums.length === 0) return nums;

    let j = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++
        }
    }

    return nums;
};

console.log(moveZeroes([1,2]))
console.log(moveZeroes([1,0,1]));
console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
