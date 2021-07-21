'use strict';

const largestPerimeterTri = (nums) => {

    nums.sort((a, b) => a - b );
    console.log(nums);

    let sum = 0;

    for (let i = nums.length - 3; i >=0; i--) {
        if(nums[i] + nums[i + 1] > nums[i+2]) return nums[i] + nums[i+1] + nums[i+2];
        
    }
    return 0;
}

console.log(largestPerimeterTri([2, 1, 2]));
console.log(largestPerimeterTri([1, 2, 1]));
console.log(largestPerimeterTri([3, 2, 3, 4]));
console.log(largestPerimeterTri([3, 6, 2, 3]));
