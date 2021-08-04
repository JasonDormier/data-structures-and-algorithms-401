'use strict';

const climbingStairs = n => {
    let a = 1, b = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = a;
        a += b;
        b = temp;
    }
    return a;
}

console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(5));
console.log(climbingStairs(15));


// 2 stairs

//                0
//              1   2
//            1  x    x

//3 stairs

//                0
//            1       2
//          1   2   1   x

//5 stairs

//                                       0
//                     1                                 2
//              1                2                1                2
//         1       2        1        02         1     2         01   x
//      1    02   01   x2    01  x              01 x  01 x       
//   01  x2     x


