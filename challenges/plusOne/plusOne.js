'use strict';

const plusOne = digits => {
    // if (digits[digits.length - 1] === 9) {
    //     if (digits.length === 1) {
    //         digits[digits.length - 1] = 1;
    //         digits[digits.length] = 0;
    //     } else {
    //         digits[digits.length - 2]++;
    //         digits[digits.length - 1] = 0;
    //     }
    // } else {
    //     digits[digits.length - 1]++;
    // }

    // return digits;

    let merge = BigInt(digits.join(''));
    merge++;
    return merge.toString().split('');
    console.log(merge);
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
