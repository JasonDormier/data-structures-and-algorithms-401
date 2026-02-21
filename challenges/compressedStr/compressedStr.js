'use strict';

function compressStr(chars) {
    let compressed = [];
    let char = chars[0];
    let count = 1;
    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] === char) {
            count++;
        } else {
            compressed.push(char);
            if (count > 1) {
                compressed.push(...count.toString().split(''));
            }
            if (i < chars.length) {
                char = chars[i];
                count = 1; 
            }
        }
    }
    chars.splice(0, chars.length, ...compressed);
    return chars;
}
console.log(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
console.log(["a"]);
console.log(["a","a","b","b","c","c","c"]);