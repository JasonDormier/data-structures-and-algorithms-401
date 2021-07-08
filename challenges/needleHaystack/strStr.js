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

// console.log(strStr('hello', 'll'))//2
// console.log(strStr('aaaaaa', 'baa'))//-1
// console.log(strStr('', ''))//0
// console.log(strStr('', 'a'))//-1
// console.log(strStr('a', ''))//0
// console.log(strStr('a', 'a'))//0

module.exports = strStr;