'use strict';

const countingBits = (n) => {

    if(n === 0) return [0];

    const result = [0,1];

    for (let i = 2; i <= n; i++) {
        if(i % 2 === 0) result[i] = result[Math.floor(i/2)];
        else result[i] = result[Math.floor(i/2)] + 1;

    }
    return result
}

const countingBitsTwo = (n) => {

    const result = [];
    for (let i = 0; i <= n; i++) {

        const count = i.toString(2).split('').reduce((acc, val) => acc + +val, 0)
        result.push(count);

    }
    return result
}


console.log(countingBits(0));
//console.log(countingBits(2)); //output  [0,1,1]
//console.log(countingBits(5)); //output  [0,1,1,2,1,2,]
//console.log(countingBits(10)); //output [0,1,1,2,1,2,2,3,2,2]
console.log(countingBits(32)); //output [0,1,1,2,1,2,2,3,1,2,2,3,2,3,4,1,2,2,3,2,3,3,4,2,3,3,4,2,3,3,4,3,4,4,5,1]
//                                           2   4       8            16                                      32
//       0,1,1, //2
//         2,1, //4
//         2,2,3,1  //8
//         2,2,3,2,3,4,1  //16
//         2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1  //32