'use strict';

//We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. Remeber that a subsequence maintains the order of characters selected from a sequence.
//More formally, let  be the respective indices of h, a, c, k, e, r, r, a, n, k in string . If  is true, then  contains hackerrank.
//For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.
//Example:haaaccckkkeeerrank
//This contains a subsequence of all of the characters in the proper order. Answer YES

//Example2:haaackkerannk
//This is missing the second 'r'. Answer NO.

//Example3: hcccaakkerrank
//There is no 'c' after the first occurrence of an 'a', so answer NO.

const hackerRankString = s => {
    const key = 'hackerrank';
    let j = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === key[j]) j++;
    }
    if(j === key.length) return 'YES';
    else return 'NO'
}

console.log(hackerRankString('haaaccckkkeeerrank')); //yes
console.log(hackerRankString('haaackkerannk')); //no
console.log(hackerRankString('hcccaakkerrank'));//no
console.log(hackerRankString('hereiamstackerrank'));//yes
console.log(hackerRankString('hackerworld'));//no
console.log(hackerRankString('hhaacckkekraraannk'));//yes
console.log(hackerRankString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'));//no
