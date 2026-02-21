'use strict';

//A weighted string is a string of lowercase English letters where each letter has a weight. Character weights are  to  from  to  as shown below:
//a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
//A uniform string consists of a single character repeated zero or more times. For example, ccc and a are uniform strings, but bcb and cd are not.
//return yes or no

//sample s= 'abbcccdddd' queries [1,7,5,4,15] would be yes, no, no, yes, no

function uniformWeightString (s, queries) {
    const compare = [];
    const output = [];
    for (let i = 0; i < s.length; i++) {
        s[i] === s[i-1] ? compare.push((s[i].codePointAt(0) - 96) + compare[i-1]) : compare.push(s[i].codePointAt(0) - 96);
    }

    for (let i = 0; i < queries.length; i++) {
        compare.includes(queries[i]) ? output.push('Yes') : output.push('No');
    }

    return output;
}

console.log(uniformWeightString('aaa', [ 1, 7, 5, 4, 15 ]));
console.log(uniformWeightString('abbcccdddd', [ 1, 7, 5, 4, 15 ]));
console.log(uniformWeightString('abccddde', [ 1, 3, 12, 5, 9, 10 ]));
console.log(uniformWeightString('aaabbbbcccddd', [ 9, 7, 8, 12, 5 ]));