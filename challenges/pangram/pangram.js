'use strict';

//A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

//Example: The quick brown fox jumps over the lazy dog

//return pangram or not pangram

const pangram = s => {
    const map = {};
    const key = 'abcdefghijklmnopqrstuvwxyz'
    if(s.length < 26) return 'not pangram'
    for (let i = 0; i < key.length; i++) {
        map[key[i]] = 1;
    }
    for(let i = 0; i < s.length; i++) {
        const lowerS = s[i].toLowerCase();
        if(map[lowerS]) map[lowerS]++;
    }
    for(let letter in map){
        if(map[letter] < 2 ) return 'not pangram'
    }
    return 'pangram'
}

console.log(pangram('The quick brown fox jumps over the lazy dog')) //pangram
console.log(pangram('We promptly judged antique ivory buckles for the next prize')) //pangram
console.log(pangram('We promptly judged antique ivory buckles for the prize'))// no pangram