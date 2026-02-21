'use strict';
// There is a sequence of words in CamelCase as a string of letters, , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given , determine the number of words in .
//A-Z have ASCII code 65-90
//charCodeAt(0)

const camelCase = (s) => {
    let total = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
            total++;
        }
    }
    return s.length === 0 || s.length === 1 ? 0 : total;
}

console.log(camelCase('camelCaseLetters'));
console.log(camelCase('howManyCapitolLettersAreThereInThisString'));
console.log(camelCase(''));
console.log(camelCase(' '));
