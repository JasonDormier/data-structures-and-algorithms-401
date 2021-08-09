'use strict';

//Given two strings s and t, determine if they are isomorphic.

//Two strings s and t are isomorphic if the characters in s can be replaced to get t.

//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isomorphic = (s, t) => {

    const map = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = t[i];

        if (map[s[i]] !== t[i]) return false;
    }
    return true;
}

console.log(isomorphic('egg', 'add')); //true
console.log(isomorphic('foo', "bar")); // false
console.log(isomorphic('paper', 'title')) // true
console.log(isomorphic('balls','tetts')); //true
console.log(isomorphic('hells', 'byeee')); // false

//Input: s = "egg", t = "add"
//Output: true

//Input: s = "foo", t = "bar"
//Output: false

//Input: s = "paper", t = "title"
//Output: true