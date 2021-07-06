'use strict';

const strStr = function (haystack, needle) {
    const index = haystack.indexOf(needle)
    if (!haystack) {
        if (needle) return -1;
        return 0;
    };
    if(haystack && !needle) return 0;
    if (index >= 0) return index
    return -1;

    // for(let i = 0; i < haystack.length; i++){
    //     console.log(haystack[i]);
    // }

}

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaaa', 'baa'))
console.log(strStr('', ''))
console.log(strStr('', 'a'))
console.log(strStr('a', ''))
console.log(strStr('a', 'a'))

module.exports = strStr;