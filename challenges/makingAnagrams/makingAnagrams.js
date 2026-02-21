'use strict';

//return the amount of characters that need to be deleted for both strings to be anagrams.
// const makingAnagrams = (s1, s2) => {

//     const m1 = {};
//     const m2 = {};
//     let count = 0;

//     //console.log(`s1.length: ${s1.length}, s2.length: ${s2.length}`);
//     for (let i = 0; i < s1.length; i++) {
//         !m1[s1[i]] ? m1[s1[i]] = 1 : m1[s1[i]]++;
//     }

//     for (let i = 0; i < s2.length; i++) {
//         !m2[s2[i]] ? m2[s2[i]] = 1 : m2[s2[i]]++;

//     }

//     const k1 = Object.keys(m1);
//     const k2 = Object.keys(m2);

//     //console.log(k1, k2)

//     let i = 0;
//     let l = k1.length > k2.length ? k1.length : k2.length;
    
//     while (i < l){
//         //if the char exists in both math
//         //console.log(`${k1[i]} : ${m1[k1[i]]},  ${k2[i]} : ${m2[k2[i]]}`)
//         if (m2[k1[i]]) {
//             console.log(`shared keys: ${k1[i]}`)
//             count += Math.abs(m2[k1[i]] - m1[k1[i]]);
//         }
//         if (!m1[k2[i]] && i < k2.length) {
//             console.log(`m2solo keys: ${k2[i]} : ${m2[k2[i]]}`)
//             count += m2[k2[i]]
//         }
//         if (!m2[k1[i]] && i < k1.length) {
//             console.log(`m1solo keys: ${k1[i]} : ${m1[k1[i]]}`)
//             count += m1[k1[i]]
//         }

//         i++;
//     }

//     return count;
// }
const makingAnagrams = (s1, s2) => {

    const m1 = {};
    const m2 = {};
    let count = 0;
    let lng = s1.length > s2.length ? s1.length : s2.length;

    for (let i = 0; i < lng; i++) {

        if (i < s1.length) !m1[s1[i]] ? m1[s1[i]] = 1 : m1[s1[i]]++;
        if (i < s2.length) !m2[s2[i]] ? m2[s2[i]] = 1 : m2[s2[i]]++;
    }

    const k1 = Object.keys(m1);
    const k2 = Object.keys(m2);

    let i = 0;
    let l = k1.length > k2.length ? k1.length : k2.length;
    
    while (i < l){

        if (m2[k1[i]]) count += Math.abs(m2[k1[i]] - m1[k1[i]]);
        if (!m1[k2[i]] && i < k2.length) count += m2[k2[i]];
        if (!m2[k1[i]] && i < k1.length) count += m1[k1[i]];
        i++;
    }
    
    return count;
}

console.log(makingAnagrams('cde', 'abc')); //4
console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa')); //19
console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa')); //19
console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfaz')); //20
console.log(makingAnagrams('absd', 'dfadfiaa')); //8
