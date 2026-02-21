'use strict';

//const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];


// for (let col = 0; col < matrix.length; col++) {
//     console.log(matrix[0].length);
//     console.log(matrix.length);
//     for (let row = 0; row < matrix.length; row++) {
//         console.log(matrix[row][col]);
//     }
// }

// for (let row = 0; row < matrix.length; row++ ) {
//     for(let col = 0; col < matrix.length; col++){
//         console.log(matrix[row][col]);
//     }
// }

// for (let row = 0; row < matrix.length; row++ ) {
//     for(let col = 0; col < matrix.length; col++){
//         console.log(matrix[col][row]);
//     }
// }

// for (let i = 0; i < 2 * matrix.length - 1; i++) {
//     let indexRow = i < matrix.length ? 0 : i - matrix.length + 1;
//     for (let row = indexRow; row <= i - indexRow; row++) {
//         let col = i - indexRow
//         console.log(matrix[row][col]);
//     }
// }
// console.log('first for loop logic: ', 2 * matrix.length - 1);
// for (let i = 0; i < 2 * matrix.length - 1; ++i) {
//     console.log('i', i);
//     // let indexRow;
//     // if (i < matrix.length) {
//     //     indexRow = 0;
//     // } else {
//     //     console.log('question: ', i - matrix.length + 1);
//     //     indexRow = i - matrix.length + 1;
//     // }

//     let indexRow = i < matrix.length ? 0 : i - matrix.length +1;
//     console.log('i - matrix length + 1',i - matrix.length+1);
//     console.log(`${i} - ${matrix.length + 1} = ${i - matrix.length+1}`);

//     for (let row = indexRow; row <= i - indexRow; row++) {//0 - -2 = -2, 1 - -1 = 0, 2 - 0 = 2, 3 - 1 = 2, 4 - 2 = 2

//         console.log('inner loop i: ', i)
//         console.log('inner loop indexRow: ', indexRow)
//         console.log('inner loop row: ', row)
//         console.log(`i ${i} - indexRow ${indexRow} = ${i - indexRow}`);
//         let col = i - row;
//         console.log(matrix[row][col]);
//     }
// }

//diagonal right to left
// for (let i = 0; i < 2 * matrix.length - 1; ++i) {

//     let indexRow = i < matrix.length ? 0 : i - matrix.length +1;

//     for (let row = indexRow; row <= i - indexRow; row++) {
//         let col = matrix.length - 1 - i + row;
//         console.log(matrix[row][col]);
//     }
// }

//spiral traversing
// const matrix = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8], 
//     [9, 10, 11, 12], 
//     [13, 14, 15, 16]
// ];

//const matrix = [[3],[2]];
// const matrix = [[3],[2],[4]];

// const matrix = [
//     [2, 3, 4],
//     [5, 6, 7],
//     [8, 9, 10],
//     [11, 12, 13],
//     [14, 15, 16]
// ];

// const matrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16],
//     [17,18,19,20]
// ]

// const matrix = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ];
// const matrix = [
//     [1, 2, 3, 4,],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ];
//const matrix = [[1, 2, 3]];
 const matrix = [[1]];
// const matrix = [];
const sprialMatrix = (matrix) => {

    if (!matrix.length) return 0;

    const results = [];

    let row = 0;
    let col = 0;

    let horizontalTravel = true;
    let reverse = false;

    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;

    if (!matrix.length * matrix[0].length) return 0;

    while (results.length < matrix.length * matrix[0].length) {

        results.push(matrix[row][col]);
        if (matrix[0].length < 2) horizontalTravel = false;

        //traversal conditions
        if (horizontalTravel && !reverse) col++;
        if (!horizontalTravel && !reverse) row++;
        if (horizontalTravel && reverse) col--;
        if (!horizontalTravel && reverse) row--;

        //logic conditions
        if (row === top && col === right && horizontalTravel) {
            horizontalTravel = false;
            top++;
        }

        if (row === bottom && col === right && !horizontalTravel) {
            horizontalTravel = true;
            reverse = true;
            right--;
            
        }

        if (row === bottom && col === left && horizontalTravel) {
            horizontalTravel = false;
            bottom--;
        }

        if (row === top && col === left && !horizontalTravel) {
            horizontalTravel = true;
            reverse = false;
            if (matrix[0].length - 1 > 2) {
                left++;
            }
        }
    }
    return results;
}

console.log(sprialMatrix(matrix));