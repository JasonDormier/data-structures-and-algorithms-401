'use strict';

// const anagram = s => {
//     if (s.length % 2 !== 0) return -1;
//     const map = {};
//     const map2 = {};
//     let count = 0;
//     for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--){
//         !map[s[i]] ? map[s[i]] = 1 : map[s[i]]++;
//         !map2[s[j]] ? map2[s[j]] = 1 : map2[s[j]]++;
//     }

//     for(let char in map){
//         if(map2[char]) {
//             map2[char] = map2[char] - map[char];
//         };
//     }
//     for (let char in map2) {
//         if(map2[char] > 0) count += map2[char];
//     }
//     return count;
// }

const anagram = s => {
    if (s.length % 2 !== 0) return -1;
    const map = {};
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {

        if (i >= s.length / 2) {
            !map[s[i]] ? map[s[i]] = 1 : map[s[i]]++;
        };

        if (i < s.length / 2 && map[s[i]]) {
            map[s[i]]--;
        }
    }

    for (let char in map) {
        count += map[char];
    }
    return count;
}
console.log(anagram('aaabbb'));//3
console.log(anagram('ab'));//1
console.log(anagram('abc'));//-1
console.log(anagram('mnop'));//2
console.log(anagram('xyyx'));//0
console.log(anagram('xaxbbbxx'));//1
console.log(anagram('asdfjoieufoa'));//3
console.log(anagram('fdhlvosfpafhalll'));//5
console.log(anagram('mvdalvkiopaufl'));//5

// fdhlvosf
// pafhalll

// f:2 d:1 h:1 l:1 v:1 o:1 s:1        =8
// f:1     h:1 l:3            p:1 a:2 =8
//   1           2              1   2 =5
      

// asdfjo

// a:1 s:1 d:1 f:1 j:1 o:1             =6
// a:1         f:1     o:1 i:1 e:1 u:1 =6
//                           1   1   1  =3
// ieufoa
      
      










