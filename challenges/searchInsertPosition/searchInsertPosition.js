'use strict';

//this is an issue because it loops all the way through the array everytime  unless the target is 0 or less then nums[0]
const searchInsertPosition = (nums, target) => {
    if (target === 0 || target <= nums[0]) return 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (target === nums[i]) return i;
    //     if (target >= nums[i] && target <= nums[i + 1]) return i + 1;
    //     if (target > nums[nums.length - 1]) return nums.length;
    // }
    let i = 0;

    while(i < nums.length){
        if(nums[i] >= target) break;
        i++;
    }
    return i
};

console.log(searchInsertPosition([1, 3, 5, 6], 5)); //output 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); //output 1
console.log(searchInsertPosition([1, 3, 5, 6], 7)); //output 4
console.log(searchInsertPosition([1, 3, 5, 6], 0)); //output 0
console.log(searchInsertPosition([1], 0)); //output 0
console.log(searchInsertPosition([1, 3, 5], 5)) //output 2
console.log(searchInsertPosition([2, 5], 1)) //output 0