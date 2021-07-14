'use strict';

const majorityElement = (nums) => {
    const map = {};
    let max = 0;
    let val = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        map[num] ? map[num] += 1 : map[num] = 1;
    }

    for (let key in map) {
        console.log('key: ', key, ' value: ', map[key]);
        if (map[key] > val) {
            val = map[key];
            max = parseInt(key);
        }
    }
    return max;
}


console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 9]));
console.log(majorityElement([-1, 1, 1, 1, 2, 1]));

module.exports = majorityElement;