'use strict';

const reducedString = (s) => {
    if (s.length === 1) return s;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            s = s.replace(`${s[i]}${s[i-1]}`, '');
            i = i - 2;
        }
    }
    return s.length > 0 ? s : 'Empty String';
}

console.log(reducedString('aaabccddd'));
console.log(reducedString('abba'));
console.log(reducedString(''));


// let text = 'aaabccddd';
// console.log(text.length);
// console.log(text.length -2);
// console.log(-(text.length -2))
// //text = text.slice(-(text.length - 2));
// text = text.replace('aa','');
// console.log('part: ', text);

