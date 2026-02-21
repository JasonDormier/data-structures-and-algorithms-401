'use strict'

function lengthOfLongestSubstring(s) {
    const arr = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        while (arr.includes(s[i])) {
            arr.shift();
        }
        arr.push(s[i]);
        if(arr.length > max) max = arr.length;
    }
    return max;
};

console.log(lengthOfLongestSubstring('pwwkew'));