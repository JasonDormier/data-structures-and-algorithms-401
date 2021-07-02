'use strict';

const maxConsecutiveOnesIII = (nums, k) => {
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] === 0) k--;
        if (k < 0) {
            if (nums[j] === 0) k++;
            j++;
        }
        i++;
    }
    return i - j;
}
module.exports = maxConsecutiveOnesIII;