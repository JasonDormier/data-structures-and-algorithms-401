'use strict';

const rotateStr = (s, goal) => {    
    const str = s+s;
    if (s.length !== goal.length) return false;
    return str.includes(goal) ? true : false;
}

console.log(rotateStr('abcde', 'cdeab')); //true
console.log(rotateStr('abcde', 'abced')); //false
console.log(rotateStr('bbbacddceeb', 'ceebbbbacdd')); //true