'use strict';

const strConstruction = s => {
    
    let cost = 1;

    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i], i - 1) === -1) cost++;
    }
    return cost;
}

console.log(strConstruction('abcd')); //4
console.log(strConstruction('abab')); //2
console.log(strConstruction('scfg')); //4
console.log(strConstruction('bccb')); //2