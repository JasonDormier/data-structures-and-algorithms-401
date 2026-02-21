'use strict'

//In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. abc -> cba . Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

//Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

// example s = 'lmnop'
// The ordinal values of the charcters are [108,109,110,111,112].  and the ordinals are [112,111,110,109,108]. The absolute differences of the adjacent elements for both strings are[1,1,1,1] , so the answer is Funny

// const funnyNumbers = s => {

//     const arr1 = [];
//     const arr2 = [];
//     const outPut1 = [];
//     const outPut2 = [];
//     let j = s.length - 1;
//     for (let i = 0; i < s.length; i++) {
//         const coversion. = s[i].codePointAt(0);
//         const coversion2 = s[j].codePointAt(0);
//         arr1.push(coversion);
//         arr2.push(coversion2);
//         j--
//     }
    
//     for (let i = 1; i < arr1.length; i++) {
//         outPut1.push(Math.abs(arr1[i -1] - arr1[i]));
//         outPut2.push(Math.abs(arr2[i -1] - arr2[i]));
//     }
//     const string1 = outPut1.join('');
//     const string2 = outPut2.join('');
//     return string1 === string2 ? 'Funny' : 'Not Funny';
// }

// const funnyNumbers = s => {

//     const arr = [];
//     let string1 = '';
//     let string2 = '';
//     let j = s.length - 1;
//     for (let i = 0; i < s.length; i++) {

//         if(i > 0){
//             string1 += Math.abs(arr[0] - s[i].codePointAt(0));
//             string2 += Math.abs(arr[1] - s[j].codePointAt(0));
//         }

//         [arr[0], arr[1]] = [s[i].codePointAt(0), s[j].codePointAt(0)]
//         j--
//     }

//     return string1 === string2 ? 'Funny' : 'Not Funny';
// }

const funnyNumbers = s => {
    let j = s.length - 1;
    for (let i = 1; i < s.length; i++, j--) {
        if(Math.abs(s.codePointAt(i) - s.codePointAt(i - 1)) !== Math.abs(s.codePointAt(j) - s.codePointAt(j - 1))) return 'Not Funny';
    }
    return 'Funny'
}

console.log(funnyNumbers('lmnop')); //funny
console.log(funnyNumbers('acxz')); //funny
console.log(funnyNumbers('bcxz')); //not funny
console.log(funnyNumbers('ivvkxq')); //not funny
console.log(funnyNumbers('ivvkx')); //not funny
