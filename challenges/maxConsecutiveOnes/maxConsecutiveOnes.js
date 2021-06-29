'use strict';

const maxConsecutiveOnes = (nums, k) => {

    let counter = 0;
    let compare = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) counter++;

        //need to figure out the addition that will check the comparsion of k to the 0's and 1's
        if (nums[i] === 0 && nums[i + k] === 0) {

            if (compare < counter) {
                compare = counter;
                counter = 0;
            }
        }
        if (nums[i] === 0 && nums[i + 1] === undefined && nums[i - k] === 1) counter++
    }
    console.log('counter: ', counter);
    console.log('compare: ', compare);
    if (compare > counter) return compare;
    return counter;

}



console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(maxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
module.exports = maxConsecutiveOnes;