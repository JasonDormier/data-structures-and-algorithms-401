'use strict';

//can the anagram rearrange to a palindrome?

const gameOfThrones = s => {

    let map = {};
    let midChar = false;
    
    for (let i = 0; i < s.length; i++) {
        !map[s[i]] ? map[s[i]] = 1 : map[s[i]]++;
    }

    for (let char in map) {
        if (map[char] % 2 > 0 && midChar ) return 'NO';
        if (map[char] % 2 > 0 && !midChar ) midChar = true;
    }

    return 'YES';
}

console.log(gameOfThrones('aaabbbb')); //yes
console.log(gameOfThrones('cdefghmnopqrstuvw')); //No
console.log(gameOfThrones('cdcdcdcdeeeef')); //yes
console.log(gameOfThrones('bbccaa')); //yes
console.log(gameOfThrones('aaaaaaaa')); //yes
console.log(gameOfThrones('a')); //yes