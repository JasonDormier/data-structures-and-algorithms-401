'use strict';
//find a solution between your brute force method and the second solution.
function arrayManipulation(n, queries) {
    const arrLength = n;
    const numArr = queries.length;
    const outterArr = [];
    let maxVal = 0;
    console.log('arrLength: ', arrLength);
    console.log('numArr: ', numArr);

    for (let i = 0; i < numArr; i++) {
        outterArr.push([]);

        let bound1 = queries[i][0] - 1;
        let bound2 = queries[i][1] - 1;
        console.log('bound1: ', bound1);
        console.log('bound2: ', bound2);

        console.log('outterArr: ', outterArr);

        for (let j = 0; j < arrLength; j++) {
            let value = 0;

            if (!outterArr[i - 1]) {
                value = queries[i][2];
                console.log('value assignment 1: ', value);
            } else {
                value = outterArr[i - 1][j] + queries[i][2];
                console.log('value assignment 2: ', value);
            }

            if (j >= bound1 && j <= bound2) {
                console.log('if 1')
                outterArr[i].push(value);
                if (value > maxVal) maxVal = value;
            }
            else if (j < bound1 && i > 0) {
                console.log('if 2');
                value = outterArr[i - 1][j];

                outterArr[i].push(value);
            }
            else if (j > bound2 && i > 0) {
                console.log('if 3');
                value = outterArr[i - 1][j];
                outterArr[i].push(value);
            } else {
                console.log('else');
                outterArr[i].push(0);
            }
        }
    }
    console.log(outterArr);
    return maxVal;
}

//not your solution but super efficent, any only uses one array that is updated on each for loop.
function arrayManipulation2(n, queries) {
    let arr = Array(n).fill(0);
    let max = 0;

    for (const [a, b, k] of queries) {
        arr[a - 1] += k;
        arr[b] -= k
    }

    let current = 0;
    for (let i = 0; i < n; i++) {
        current += arr[i];
        if (current > max) max = current;
    }

    return max;
}