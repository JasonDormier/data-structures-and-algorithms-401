'use strict';

//Given two strings s and t, determine if they are isomorphic.

//Two strings s and t are isomorphic if the characters in s can be replaced to get t.

//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isomorphic = (s, t) => {
    //let string = '';
    
    const map = {};

    if (s.length !== t.length) return false;
    if(s === t) return true;

    for (let i = 0; i < s.length; i++) {
        let s1 = s[i],
            t1 = t[i];
        if(map[s1]) {
            if(map[s1] !== t1) return false
        }
        
        else if(Object.values(map).includes(t1)) return false;

        map[s1] = t1;
    }
    return true;
    // for (let i = 0; i < s.length; i++) {
    //     string += map[s[i]];
    // }

    //return string === t ? true : false;
}

console.log(isomorphic('egg', 'add')); //true
console.log(isomorphic('foo', "bar")); // false
console.log(isomorphic('paper', 'title')) // true
console.log(isomorphic('balls','tetts')); //false
console.log(isomorphic('monkey', 'tigers')); //true
console.log(isomorphic('hells', 'byeee')); // false

const isomorphic = (s, t) => {
    
    const map = {};
    let string = '';
    
    if (s.length !== t.length) return false;
    if(s === t) return true;

    for (let i = 0; i < s.length; i++) {
        let s1 = s[i],
            t1 = t[i];

        
        if(Object.values(map).includes(t1)) continue;
        map[s1] = t1;
    }
    
    for (let i = 0; i < s.length; i++) {
        string += map[s[i]];
    }

    return string === t ? true : false;
}