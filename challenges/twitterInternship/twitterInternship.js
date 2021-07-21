'use strict'

const numPlayers = (k, scores) => {

    let roundStanding = [];
    let rank = 1;
    let i = scores.length;

    while (roundStanding.length <= k - 1) {

        let j = 1;
        i--;

        while (scores[i] === scores[i - j]) {

            j++;
            roundStanding[roundStanding.length] = rank;
        }

        roundStanding[roundStanding.length] = rank++;
    }

    return roundStanding.length;
}


// console.log(numPlayers(4, [20, 40, 60, 80, 100]));
console.log(numPlayers(5, [2, 2, 2, 4, 5]));
// console.log(numPlayers(5, [1, 1, 1, 4, 5]));
//console.log(numPlayers(6, [20, 30, 40, 40, 40, 50, 60]));
//console.log(numPlayers(7, [20, 30, 30, 40, 40, 40, 50, 60]));

const minMoves = (arr) => {
    //console.log(arr);

    let beginningOnes = 0; // start from end
    let endOnes = 0; //start from beginning

    let mid = Math.floor(arr.length / 2);

    //start at the beginning check 1's from 0 - mid
    //start at the mid check 1's from mid - arr.length

    //compare the two to decided whether to start at the end or beginning

    let count = 0;
    let ones = 0;

    for (let i = arr.length -1; i >= 0; i--) {

        if(arr[i] === 1) ones += 1;

        else count += ones;
    }

    console.log(arr);
    return count;

    // let i = 0;
    // arr.sort((left, right) => {
    //     console.log("["+arr.join()+"], comparing element #"+arr.indexOf(left)+" ("+left+") and #"+arr.indexOf(right)+" ("+right+"): "+(left-right));

    //     if (left < right) {
    //         //i++;
    //         return 1;
    //     }
    //     else if (left > right) {

    //         i++;

    //         return -1;

    //     }


    //     else {return 0}

    //     // a-b;
    //     // i++;

    // })
    // return i;
}

// console.log(minMoves([1, 1, 1, 1, 0, 0, 0, 0]));
// console.log(minMoves([1, 1, 1, 1, 0, 1, 0, 1]));
// console.log(minMoves([0, 1, 1, 1, 0, 0, 0, 0, 1]));
// console.log(minMoves([0, 1, 1, 1, 0, 0, 0, 0, 1].reverse()));

// [0, 1, 1, 1, 0, 0, 0, 0, 1]
// [1, 0, 1, 1, 0, 0, 0, 0, 1]



// [1, 1, 1, 1, 0, 1, 0, 1]
// [1, 1, 1, 1, 0, 1, 1, 0]//1
// [1, 1, 1, 1, 1, 0, 1, 0]//2
// [1, 1, 1, 1, 1, 1, 0, 0]//3