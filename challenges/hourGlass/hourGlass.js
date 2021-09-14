'use strict';

const hourGlass = arr => {

    //console.log(arr);

    //just get the basics
    //const test = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2]
    // console.log(test);//should equal 7?

    //moving window three movement varibles for each row of the hour glass
    // 111   110
    //  1     0
    // 111   110

    let maxSum;
    //let currentSum = 1;
    let counter = 1;

    let col = 2;
    let row = 3;

    // console.log(arr[row][col] + arr[row + 1][col] + arr[row + 2][col] + arr[row + 1][col + 1] + arr[row][col + 2] + arr[row + 1][col + 2] + arr[row + 2][col + 2]);
    // console.log(arr[row][col + 1], arr[row][col + 1], arr[row][col + 2]);
    // console.log('x', arr[row + 1][col + 1], 'x');
    // console.log(arr[row + 2][col], arr[row + 2][col + 1], arr[row + 2][col + 2]);
    // console.log('test: ', arr[row][col]);


    for (let i = 0; i + 2 < arr.length; i++) {
        for (let j = 0; j + 2 < arr.length; j++) {

            let currentSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            //console.log(currentSum);
            // console.log(arr[i][j], arr[i][j + 1], arr[i][j + 2]);
            // console.log('x', arr[i + 1][j + 1], 'x');
            // console.log(arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]);
            // console.log(counter,': ',currentSum);
            // console.log('-----')
            // counter ++;
            if (i === 0 && j === 0) maxSum = currentSum;
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}

console.log(hourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]));

console.log(hourGlass([
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
]));
console.log(hourGlass([
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
]));
console.log(hourGlass([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]));







