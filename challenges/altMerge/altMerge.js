'use strict';

var mergeAlternately = function(word1, word2) {
    const arr1 = word1.split('');
    const arr2 = word2.split('');
    const arr = [];

    let i = 0, j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(i === j) arr.push(arr1[i++]);
        else arr.push(arr2[j++]);
        console.log(arr);
    }
    while (i < arr1.length) arr.push(arr1[i++]);
    while (j < arr2.length) arr.push(arr2[j++]);
    
    return arr.join('');
};

console.log(mergeAlternately('abc', 'efg'));
console.log(mergeAlternately('abc', 'efghij'));