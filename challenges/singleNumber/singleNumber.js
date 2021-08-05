'use strict';

const singleNumber = (nums) => {
    const map = {};
    if(nums.length === 1) return nums[nums.length-1];

    for(let i in nums){
        map[nums[i]] ? map[nums[i]] += 1 : map[nums[i]] = 1;
    }

    for(let key in map){
        if(map[key] === 1) return key;
    }
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));