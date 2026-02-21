'use strict';

const memoFib = (n, memo = []) => {
    console.log('n at start: ', n);
    //console.log('memo at start: ', memo[n]);
    if (n === 0) {
        //console.log('hit 0'); 
        return 0;
    }
    if (n === 1) {
        //console.log('hit 1'); 
        return 1;
    }
    if(!memo[n]){
        memo[n] = memoFib(n-1, memo) + memoFib(n-2, memo);
        console.log(memo);
        console.log(memo[n]);
    }
    return memo[n]
}
console.log(memoFib(6));