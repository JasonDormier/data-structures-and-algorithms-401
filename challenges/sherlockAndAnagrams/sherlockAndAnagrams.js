'use strict';

const sherlock = s => {
    const map = {};
    let result = 0;

    for (let i = 0; i < s.length; i++) {

        for (let j = i; j < s.length; j++) {
            let sub = s.slice(i, j + 1).split('').sort().join('');
            !map[sub] ? map[sub] = 1 : map[sub]++;
        }

    }

    console.log(map)
    for (let i in map) {
        if (map[i] > 1) {
            result += map[i] * (map[i] - 1) / 2;
        }
    }
    return result;
}

// const str = 'abba'
//console.log(str.slice(3,4))
console.log(sherlock('abba'))//4
console.log(sherlock('abcd'))//0
console.log(sherlock('ifailuhkqq'))//3
console.log(sherlock('kkkk'))//10
console.log(sherlock('cdcd'))//5
