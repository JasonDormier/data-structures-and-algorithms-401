'use strict';

//You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

//Return true if you can reach the last index, or false otherwise.

// try with a while loop and try with a for loop

const jump = (nums) => {
    let i = 0;
    //let jumps = 1;
    let tracker = 0;

    //if(nums.length === 1) return true;
    //if(nums[i] === 0) return false;

    while (i < nums.length) {

        if (i > tracker) return false;
        if (nums[i] + i > tracker) {
            //console.log(`nums[i]: ${nums[i]} + i: ${i} = ${nums[i] + i}`);
            tracker = nums[i] + i;
        }
        if (tracker >= nums.length - 1) return true;

        i++;

        // for (let i = 0; i < nums.length; i++) {
        //     console.log('========= round =========== ');
        //     console.log('nums[i]:', nums[i]);
        //     console.log('i: ', i);
        //     console.log('tracker: ', tracker);
        //     if (i > tracker) return false;
        //     if (nums[i] + i > tracker) {
        //         console.log(`nums[i]: ${nums[i]} + i: ${i} = ${nums[i] + i}`);
        //         tracker = nums[i] + i;
        //     }
        //     if (tracker >= nums.length - 1) return true;

    }
    return false;
}

console.log(jump([2, 3, 1, 1, 4])); //true
console.log(jump([3, 2, 1, 0, 4])); //false
console.log(jump([3, 3, 1, 0, 4])); //true
console.log(jump([0])); //true
console.log(jump([1,2])); //true
console.log(jump([0,1]))//false
console.log(jump([0,2,3]))//false
console.log(jump([1, 0, 1, 0]))//false



