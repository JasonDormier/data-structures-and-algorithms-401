'use strict';

const canConstruct = (ransomNote,magazine) => {
    const map = {};
    
    if(!ransomNote || !magazine) return false;
    
    for (let i = 0; i < magazine.length; i++) {
        const m = magazine[i];
        map[m] ? map[m] += 1 : map[m] = 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const rn = ransomNote[i];
        if (map[rn]) map[rn] -= 1;
        else return false;
    }

    return true;
}

console.log(canConstruct('a', 'b')); //false
console.log(canConstruct('aa', 'ab')); //false
console.log(canConstruct('aa', 'aab')); //true
console.log(canConstruct("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
//console.log(canConstruct('', ''));