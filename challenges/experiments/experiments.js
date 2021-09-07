'use strict';

const s = [5, '5', 'd'];

    for (let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])) console.log(`${s[i]} is a number`);
        else console.log(s[i], 'is not a number');
    }
