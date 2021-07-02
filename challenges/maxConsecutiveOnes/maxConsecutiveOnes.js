'use strict';

const maxConsecutiveOnes = (nums) => {
let counter = 0;
let compare = 0;
for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) counter ++;

    if(nums[i] === 0) {
        if(compare < counter) {
            compare = counter;
        }
        counter = 0;
    }
}
return Math.max(counter, compare);

}
module.exports = maxConsecutiveOnes;