'use strict';

const spiralOrder = matrix => {

    const output = [];

    //top left value
    let tl = matrix[0][0];
    //top right value
    let tr = matrix[0][matrix[0].length - 1];
    //bottom left value
    let br = matrix[matrix.length - 1][matrix[0].length - 1];
    //bottom right value
    let bl = matrix[matrix.length - 1][0];

    let row = 0;
    let col = 0;
    let count = 0;

    const matrixSize = matrix.length * matrix[0].length;

    while (output.length <= matrixSize - 1) {
        if (tl === tr && tl === bl && tl === br) {
            output.push(matrix[row][col]);
        }

        if (matrix[row][col] === tl) {
            while (matrix[row][col] !== tr && output.length <= matrixSize - 1) {
                output.push(matrix[row][col]);
                col++;
            }
        }

        if (matrix[row][col] === tr) {
            while (matrix[row][col] !== br && output.length <= matrixSize - 1) {
                output.push(matrix[row][col]);
                row++;
            }
        }

        if (matrix[row][col] === br) {
            while (matrix[row][col] !== bl && output.length <= matrixSize - 1) {
                output.push(matrix[row][col]);
                col--;
            }
        }

        if (matrix[row][col] === bl) {
            while (matrix[row][col] !== tl && output.length <= matrixSize - 1) {
                output.push(matrix[row][col]);
                row--;
            }
        }
        if (matrix.length >= 2) {
            row++, col++, count++;
            tl = matrix[0 + count][0 + count];
            tr = matrix[0 + count][(matrix[0].length - 1) - count];
            br = matrix[(matrix.length - 1) - count][(matrix[0].length - 1) - count];
            bl = matrix[(matrix.length - 1) - count][0 + count];
        }
        console.log(output);
    }
    return output;
}

// console.log(spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])); //output [1,2,3,6,9,8,7,4,5]

// console.log(spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ])); //output [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 22, 2, 14, 15],
    [16, 17, 18, 19, 20]
])); //output [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
// console.log(spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
//     [13, 14, 15],
//     [16, 17, 18]
// ])); //output [1,2,3,6,9,12,15,18,17,16,13,10,7,4,5,8,11,14]
// console.log(spiralOrder([
//     [1],
// ]));
// console.log(spiralOrder([
//     [2, 3],
// ]));
console.log(spiralOrder([
    [23, 18, 20, 26, 25],
    [24, 22, 3, 4, 4],
    [15, 22, 2, 24, 29],
    [18, 15, 23, 28, 28]
]));//output [23,18,20,26,25,4,29,28,28,23,15,18,15,24,22,3,4,24,2,22]
