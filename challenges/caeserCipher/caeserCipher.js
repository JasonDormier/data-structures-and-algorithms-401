'use strict'
//use a hashmap for the shifted key

//n is the number for which each side of the alphabet will over run. If it -3 abc will be out of range and +3 xyz will be out of range. Those numbers need to be substracted from or added to in order to get the alphabet to shift.

//check if n is postive or negative -3 or 3;
// if n is positive we will + (26 - n) to the first n letters of the alphabet
// if n is negative we will - (26 - n) to the last n letters of the alphabet
// if (n > 0) or if (n < 0)

//const alpha = 'abcdefghijklmnopqrstuvwxyz';
// let result = '';
// for (let i = 0; i < alpha.length; i++) {
//     let conversion;
//if(i < 3){ //if i is less then n then we need to turn abc to xyz 
// if(i >= 23){ 
//     conversion = alpha[i].codePointAt(0) - (26 - 3); // coverted to number + n
// } else {
//     conversion = alpha[i].codePointAt(0) + 3; // coverted to number - n to shift z to front, + n to shift a to end
// }
// result = result + String.fromCharCode(conversion);
//     if(i < 5){ 
//         conversion = alpha[i].codePointAt(0) + (26 - 5); // coverted to number + n
//     } else {
//         conversion = alpha[i].codePointAt(0) - 5; // coverted to number - n to shift z to front, + n to shift a to end
//     }
//     result = result + String.fromCharCode(conversion);
// }
// console.log(result);
// const test = 'a'.codePointAt(0) + 3;
// console.log(String.fromCharCode(test));

const caesarCipher = (s, k) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alpha2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const key = {};
    let result = '';
    if (k > 26) k = k % 26;
    for (let i = 0; i < 26; i++) {
        let conversion;
        let conversion2;
        if (i >= 26 - k) {
            conversion = alpha[i].codePointAt(0) - (26 - k);
            conversion2 = alpha2[i].codePointAt(0) - (26 - k);
        } else {
            conversion = alpha[i].codePointAt(0) + k;
            conversion2 = alpha2[i].codePointAt(0) + k;
        }
        key[alpha[i]] = String.fromCharCode(conversion);
        key[alpha2[i]] = String.fromCharCode(conversion2);
    }

    for (let i = 0; i < s.length; i++) {
        !key[s[i]] ? result += s[i] : result += key[s[i]];
    }
    return result;
}


const caesarCipher2 = (s, k) => {
    let result = '';
    if (k > 26) k = k % 26;
    for (let i = 0; i < s.length; i++) {
        const num = s[i].codePointAt(0);
        if (num >= 65 && num <= 90) {
            num - 65 >= 26 - k ? result += String.fromCharCode(num - (26 - k)) : result += String.fromCharCode(num + k);
        }
        else if (num >= 97 && num <= 122) {
            num - 97 >= 26 - k ? result += String.fromCharCode(num - (26 - k)) : result += String.fromCharCode(num + k)
        }
        else result += s[i];
    }
    return result;
}


console.log(caesarCipher('middle-Outz', 2)); //okffng-Qwvb
console.log(caesarCipher2('middle-Outz', 2)); //okffng-Qwvb

console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5)); //Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
console.log(caesarCipher2('Always-Look-on-the-Bright-Side-of-Life', 5)); //Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj

console.log(caesarCipher('1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M', 27)); //1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N
console.log(caesarCipher2('1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M', 27)); //1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N
console.log('abcdefghijklmnopqrstuvuxyz'); //1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N
console.log(caesarCipher2('abcdefghijklmnopqrstuvuxyz', 2)); 


// console.log(54%26);
// console.log('A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0));
// console.log('a'.charCodeAt(0));
// console.log('z'.charCodeAt(0));
// console.log(String.fromCharCode(91));