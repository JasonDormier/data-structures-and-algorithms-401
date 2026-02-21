'use strict';

const alternatingChar = s => {
    let count = 0;
    for(let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            count++
        }
    }
    return count;
}

console.log(alternatingChar('AAAA')); //3
console.log(alternatingChar('BBBBB')); //4
console.log(alternatingChar('ABABABAB')); //0
console.log(alternatingChar('BABABA')); //0
console.log(alternatingChar('AAABBB')); //4
console.log(alternatingChar('AAABBBAABB')); //6
console.log(alternatingChar('AABBAABB')); //4
console.log(alternatingChar('ABABABAA')); //1
console.log(alternatingChar('ABBABBAA')); //3





