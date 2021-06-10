'use strict';

function twoSum(nums, target){

    const compare = {};
    for (let i = 0; i < nums.length; i++) {
        //store our numbers in the object with the index as their key
        compare[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        //subtract to the target from nums[i] to get the compliment 
        let comp = target - nums[i];
        //if the comp is the key we get truthy
        if(compare[comp] && compare[comp] !== i){
            //return the current index and the value of the key comp from the object
            return[i, compare[comp]]
        }  
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([1,3,4,2],6));
console.log(twoSum([2,7,11,15], 9)); 

    // for(let i = 0; i < nums.length; i++){
    //     //put the nums[i] into the object with the index as the pair and compare if the key is 
    //     if(compare[nums[i]] >= 0) return [compare[nums[i]], i]
    //     //
    //     compare[target-nums[i]] = i;
    // }
    // compare[target-nums[i]] = i;

// const object = {};


// object['hello'] = 1;

// const test = [object['hello'], 2];
// console.log(test);
// console.log(object);