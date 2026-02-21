'use strict';

//a is the array to rotate
//d is the number of rotations
const leftRotation = (a, d) => {
    const arr = new Array(a.length).fill(0);
    for (let i = 0; i < a.length; i++) {
        const shift = (i - d + a.length) % a.length;

        arr[shift] = a[i];
    }
    return arr;
}

//in place
const rightRotation = (a, d) => {
    const arr = [...a];
    for (let i = 0; i < a.length; i++) {
        const shift = (i + d + a.length) % a.length;
        a[shift] = arr[i];
    }
    return a;
}

// console.log(rightRotation([1,2,3,4,5,6,7], 3)); // 5 6 7 1 2 3 4
// console.log(leftRotation([1, 2, 3, 4, 5], 4)); //5 1 2 3 4
// console.log(leftRotation([
//     41, 73, 89, 7, 10, 1, 59,
//     58, 84, 77, 77, 97, 58, 1,
//     86, 58, 26, 10, 86, 51
// ], 10)); //77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
// console.log(leftRotation([
//     33, 47, 70, 37, 8, 53,
//     13, 93, 71, 72, 51, 100,
//     60, 87, 97
// ], 13)); //87 97 33 47 70 37 8 53 13 93 71 72 51 100 60


function check(nums) {
    let outOfOrder = 0;
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] > nums[i+1]) outOfOrder++;
    }
    nums[nums.length-1] > nums[0] && outOfOrder++;
    return outOfOrder >= 2 ? false : true; 
}

const arrayTest = [3,4,5,1,2];
const arrayTest2 = [2,1,3,4];


console.log(check(arrayTest));
console.log(check(arrayTest2));
console.log(check([1,1,1]));
console.log(check([5,5,6,6,6,9,1,2]));
console.log(check([7,9,1,1,1,3]));
console.log(check([2,2,3,4,5,2]));
console.log(check([1,2,1,1]));

