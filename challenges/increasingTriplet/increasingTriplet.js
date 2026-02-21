'use strict';

// this works because you don't acutually care about what the final result of min or mid is You only care that they were assigned. Because you aren't returning min, mid, or max.  You are only returning true or false. If min is assigned but mid is never assigned then the result can never be true. 

//The <= is important to the min assignment because it is a gatekeeper to the remaining else if statements. Then if the number is actually > then min, it can be assigned to mid and due to the linear nature of the for loop we have a increasing sequence happening. Finally, if there is a num larger then those two in the array we can return true.

var increasingTriplet = function (nums) {
    let min = Infinity, mid = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= min) min = nums[i];
        else if (nums[i] < mid) mid = nums[i];
        else if (nums[i] > min && nums[i] > mid) return true;

        // console.log(i, min, mid);
    }
    return false;
};
//they don't have to be consecutive
// console.log(increasingTriplet([2,1,5,0,4,6])); //true
// console.log(increasingTriplet([20,100,10,12,5,13])); //true
// console.log(increasingTriplet([2,4,-2,-3])); //false
// console.log(increasingTriplet([1,2,1,3])); //true
// console.log(increasingTriplet([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])); //false
// console.log(increasingTriplet([1,5,0,4,1,3])); //true
// console.log(increasingTriplet([1,2,2,1])); //false
// console.log(increasingTriplet([1,6,2,5,1])); //true
// console.log(increasingTriplet([1,1,-2,6])); //false


var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n === 0) return true;
        if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            flowerbed[i] = 1;
            n--;
        } 
    }   
    
    return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))//false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1))//true
console.log(canPlaceFlowers([1,0,0,0,1], 1))//true
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))//true
console.log(canPlaceFlowers([0,0,0,0,0,1,0,0], 0))//true


