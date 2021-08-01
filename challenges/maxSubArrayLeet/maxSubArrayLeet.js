'use strict';

const maxSubArray = nums => {
    // let maxSum = nums[0],
    //     tempSum = nums[0],
    //     begin = 0,
    //     end = 1;

    // while (end < nums.length) {
    //     //console.log('tempSum: ', tempSum, 'numsEnd: ', nums[end]);
    //     tempSum += nums[end];

    //     if (tempSum <= 0 || nums[begin] <= 0) {
    //         tempSum -= nums[begin];
    //         begin++;
    //     }
    //     if (tempSum <= 0 && end === nums.length - 1 && nums.length - 1 > 0) tempSum = nums[end];

    //     maxSum = Math.max(maxSum, tempSum);

    //     end++;

    let maxSum = nums[0],
        tempSum = 0;

        for(let n in nums){
            if(tempSum < 0) tempSum = 0;
            tempSum += nums[n]
            maxSum = Math.max(maxSum, tempSum);
        }

        //console.log('begin: ', begin, 'end:', end, 'begin value: ', nums[begin], 'end value: ', nums[end], 'maxSum: ', maxSum, 'tempSum: ', tempSum);
    //}
    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([1])); //1
console.log(maxSubArray([5, 4, -1, 7, 8])); //23
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]));//6
console.log(maxSubArray([2, -1, -1, 2, 0, -3, 3]));//3
console.log(maxSubArray([-2, 1]));//1
console.log(maxSubArray([1, -3, 2, 0, -1, 0, -2, -3, 1, 2, -3, 2]));//3


