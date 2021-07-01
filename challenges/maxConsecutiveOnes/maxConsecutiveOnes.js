'use strict';

const maxConsecutiveOnes = (nums, k) => {
    console.log('nums length: ', nums.length);
    let i = 0;
    let counter = 0;
    let zero = 0;
    let subArray = 0;

    while (i < nums.length) {
        if (counter > 0 && nums[i] === 0) {
            if (zero >= k) {
                if (subArray < counter) subArray = counter;
                zero = 0;
                counter = 0;
            }
            zero++;
        }

        if (nums[i] === 1) {
            if (zero >= k) {
                if (subArray < counter) subArray = counter;
                counter = 0;
            }
            
            counter += zero;
            zero = 0;
            counter++;
        }
        console.log('i:-------------', i);
        console.log('zero: ', zero);
        console.log('counter: ', counter);
        console.log('subArray: ', subArray);
        i++;
    }
    counter += zero;
    if (counter > subArray) return counter;
    return subArray;
}


console.log(maxConsecutiveOnes([0,0,1,1,1,0,0], 0));

//console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
//console.log(maxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
module.exports = maxConsecutiveOnes;