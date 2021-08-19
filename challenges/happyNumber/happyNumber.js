'use strict';
//A happy number is a number defined by the following process:

//Starting with any positive integer, replace the number by the sum of the squares of its digits.
//Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//Those numbers for which this process ends in 1 are happy.
//Return true if n is a happy number, and false if not.
//Input: n = 19
//Output: true
//Explanation:
//1^2 + 9^2 = 82
//8^2 + 2^2 = 68
//6^2 + 8^2 = 100
//1^2 + 0^2 + 02 = 1
const isHappy = (n) => {
    const result = helper(n)
    return result === true || result === false ? result : isHappy(result);
}

const helper = (n) => {
    let sum = 0;
    let s = n.toString().split('');
    for (let i = 0; i < s.length; i++) {
        sum += s[i] ** 2;
    }
    if(sum === 4) return false;
    if(sum === 1) return true;
    return sum;
}

console.log(isHappy(19)); //true
console.log(isHappy(2)); //false
console.log(isHappy(20));
console.log(isHappy(15));
console.log(isHappy(3));
console.log(isHappy(193));
console.log(isHappy(7));