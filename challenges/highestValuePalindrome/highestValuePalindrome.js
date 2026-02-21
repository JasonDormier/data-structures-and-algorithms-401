'use strict';

//create the highest value palindrome by replacing values of the palindrome k number of times. Return the palindrome, return -1 if it is not possible.

// const highestValuePalindrome = (s, k) => {
//     let count = 0, min = Infinity;
//     const map = {};
//     //const arr = s.split('');
//     const arr = [];

//     //if palindrome is odd and k = 1 replace middle value with 9

//     //why not just put them in the object now?
//     for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j-- ) {

//         if (i === j) {
//             map['mid'] = s[i];
//             arr.push(s[i]);
//             min = Math.min(s[i], min);
//         } 
//         else if (s[i] === s[j]) {
//             map[i] = s[i]
//             arr.push(s[i]);
//             min = Math.min(s[i], min);
//         } 
//         else if (s[i] > s[j]) {
//             map[i] = s[i]
//             arr.push(s[i]);
//             min = Math.min(s[i], min);
//             count++;
//         } else {
//             map[i] = s[j]
//             min = Math.min(s[j], min);
//             arr.push(s[j]);
//             count++;
//         }
//     }
//     //console.log('map: ', map);
//     console.log('arr: ', arr);
//     console.log(`count : ${count}, k : ${k}, min: ${min}`);

//     if (count > k) return -1;
//     if (count === k) {
//         //return Object.values(map).join('') + Object.values(map).reverse().join('');
//         return arr.join('') + arr.reverse().join('');
//     }
//     // for (let index in map) {
//     //     if (count === k) break;
//     //     if (count - k === 1 && index === 'mid') map[index] === 9;
//     //     if (+map[index] === min) {
//     //         map[index] = '9';
//     //         min = 9;
//     //         //console.log('change: ', arr[i], min)
//     //         count++;
//     //     }

//     // }

//     for (let i = 0; i < arr.length; i++) {
//         console.log(`count: ${count}, k: ${k}`);
//         if (count === k) break;
//         //min = Math.min(arr[i], min);
//         // console.log(`${+arr[i]} === ${min}, ${+arr[i] === min}`);
//         if (+arr[i] === min) {
//             arr[i] = '9';
//             min = 9;
//             //console.log('change: ', arr[i], min)
//             count++;
//         }
//     }

//     if (arr.length % 2 !== 0 && k > 0) {
//         arr[Math.floor(arr.length / 2)] = '9';
//     }
//     //return Object.values(map).join('') + Object.values(map).reverse().join('');
//     return arr.join('') + arr.reverse().join('');
// }
const highestValuePalindrome = (s, k) => {
    let count = 0;
    const arr = s.split('');

    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        if (arr[i] !== arr[j]) count++;
    }

    if (count > k) return '-1';

    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {

        if (arr[i] !== arr[j]) {
            let max = Math.max(arr[i], arr[j])
            if (max !== '9' && k - count >= 1) {
                max = '9'; k--;
            }

            arr[i] = arr[j] = max;
            k--;

        }
        
        if (arr[i] !== '9' && k - count >= 2) {
            arr[i] = arr[j] = '9';
            k -= 2;
        }
    }

    if (arr.length % 2 !== 0 && k > 0) {
        arr[Math.floor(arr.length / 2)] = '9';
    }

    return arr.join('');
}




console.log(highestValuePalindrome('3943', 1)) //3993
console.log(highestValuePalindrome('092282', 3)) //992292
console.log(highestValuePalindrome('0011', 1)) //-1
console.log(highestValuePalindrome('1234321', 3)) //9239329
console.log(highestValuePalindrome('932239', 2)) //992299
