'use strict';

// const beautifulBinaryString = b => {
//     if (b.length < 3) return 0;
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i < b.length; i++) {
//         if (arr.length === 3) arr.pop();
//         arr.unshift(b[i])
//         if(arr.join('') === '010') {
//             count++;
//             arr = []
//         }
//     }
//     return count;
// }

const beautifulBinaryString = b => {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if(b.substring(i, i + 3) === '010') {
            count++;
            i += 2
        };
    }
    return count; 
}
console.log(beautifulBinaryString('0101010'))//2
console.log(beautifulBinaryString('01100'))//0
console.log(beautifulBinaryString('0100101010'))//3
console.log(beautifulBinaryString('01001001011101'))//3

