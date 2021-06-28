'use strict';

const start = [1, 2, 3];

const merge = [1, 2, 3];

const test = [...start, ...merge];

test.sort((a,b) => a-b);

console.log(test);