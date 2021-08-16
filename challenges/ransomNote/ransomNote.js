'use strict';

const canConstruct = (ransomNote,magazine) => {
    const map = {};
    
    if(!ransomNote || !magazine) return false;
    
    for (let i = 0; i < magazine.length; i++) {
        const m = magazine[i];
        map[m] ? map[m] += 1 : map[m] = 1;
        console.log(map);
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const rn = ransomNote[i];
        if (map[rn]) {
            map[rn] -= 1;
            console.log(map);
        } 
        else return false;
    }
    console.log(map);
    return true;

//     var map = {};
//     for (let ch of magazine) {
//         map[ch] = map[ch] ? ++map[ch]: 1;
//         console.log(map);
//     }
//     for (let ch of ransomNote) {
//         if (map[ch]) {
//             map[ch]--;
//             console.log(map);
//         } else {
//             return false;
//         }
//     }
//     console.log(map)
//     return true;
}

console.log(canConstruct('a', 'b')); //false
console.log(canConstruct('aa', 'ab')); //false
console.log(canConstruct('aa', 'aab')); //true
console.log(canConstruct("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
//console.log(canConstruct('', ''));