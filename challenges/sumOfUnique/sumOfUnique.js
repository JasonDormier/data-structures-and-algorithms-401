'use strict';

const sumOfUnique = function (nums) {

    let sum = 0;

    const map = {};

    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];
        map[num] ? map[num] += 1 : map[num] = 1;

    }

    for (let i in map) {
        if (map[i] === 1) sum += parseInt(i);

    }
    return sum
};
console.log(sumOfUnique([10, 6, 9, 6, 9, 6, 8, 7]));
module.exports = sumOfUnique;