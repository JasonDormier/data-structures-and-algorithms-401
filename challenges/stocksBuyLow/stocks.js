'use strict';

const prices = [5, 9, 10, 2, 4, 8, 9, 11];

//the goal is to buy low and sell high when is the best time to do that?

//we need to idenify when to buy and when to sell

const stocks = (arr) => {
    let buy = Infinity;
    let sell = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < buy) buy = arr[i];
        if(arr[i] > sell) sell = arr[i];
    }
    return `buy: ${buy}, sell: ${sell}`;
}

console.log(stocks(prices));