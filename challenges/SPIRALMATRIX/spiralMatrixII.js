'use strict';
//Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const generateMatrix = n => {
    //first just make a grid based on nxn size
    const output = [];

    const test = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log(test.length * n);

    console.log(test[n-1].length);
    console.log(test[n-1]);
    const matrix = n * n;

    if (!n) return [[]];

    //while(output.length)
    for (let i = 0; i < n; i++) { 
        //output.push([]);
        output[output.length] = [];
        for (let j = 0; j < n; j++){
            output[i][output[i].length] = 0;
           // output[i].push(0);
        }
    }
    return output;
    
};

console.log(generateMatrix(3));
//Input: n = 3
//Output: [
//     [1,2,3],
//     [8,9,4],
//     [7,6,5]
// ]
//console.log(generateMatrix(0));