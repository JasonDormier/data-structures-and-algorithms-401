'use strict';

const spiralOrder = matrix => {

    const output = [];

    //top left value
    let tl = [0, 0];
    //top right value
    let tr = [0, matrix[0].length - 1];
    //bottom right value
    let br = [matrix.length - 1, matrix[0].length - 1];
    //bottom left value
    let bl = [matrix.length - 1, 0];

    let guide = [0, 0]
    let count = 0;

    const matrixSize = matrix.length * matrix[0].length;

    while (output.length <= matrixSize - 1) {
        if (tl[0] === br[0] && tl[1] === br[1]) {

            output.push(matrix[guide[0]][guide[1]]);
        }

        if (guide[0] === tl[0] && guide[1] === tl[1]) {
            while (guide[1] !== tr[1] && output.length <= matrixSize - 1) {
                output.push(matrix[guide[0]][guide[1]]);
                guide[1]++;
            }
        }

        if (guide[0] === tr[0] && guide[1] === tr[1]) {
            while (guide[0] !== br[0] && output.length <= matrixSize - 1) {
                output.push(matrix[guide[0]][guide[1]]);
                guide[0]++;
            }
        }

        if (guide[0] === br[0] && guide[1] === br[1]) {
            while (guide[1] !== bl[1] && output.length <= matrixSize - 1) {
                output.push(matrix[guide[0]][guide[1]]);
                guide[1]--;
            }
        }

        if (guide[0] === bl[0] && guide[1] === bl[1]) {
            while (guide[0] !== tl[0] && output.length <= matrixSize - 1) {
                output.push(matrix[guide[0]][guide[1]]);
                guide[0]--;
            }
        }
        if (matrix.length >= 2) {
            guide[0]++, guide[1]++, count++;
            tl = [0 + count, 0 + count];
            tr = [0 + count, (matrix[0].length - 1) - count];
            br = [(matrix.length - 1) - count, (matrix[0].length - 1) - count];
            bl = [(matrix.length - 1) - count, 0 + count];
        }
    }
    return output;
}

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); //output [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])); //output [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
])); //output [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
])); //output [1,2,3,6,9,12,15,18,17,16,13,10,7,4,5,8,11,14]
console.log(spiralOrder([
    [1],
]));
console.log(spiralOrder([
    [2, 3],
]));
console.log(spiralOrder([
    [23, 18, 20, 26, 25],
    [24, 22, 3, 4, 4],
    [15, 22, 2, 24, 29],
    [18, 15, 23, 28, 28]
]));//output [23,18,20,26,25,4,29,28,28,23,15,18,15,24,22,3,4,24,2,22]
