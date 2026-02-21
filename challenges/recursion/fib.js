'use strict';

function recursiveFib(num){
    //console.log('num: ', num);
    if(num <= 2) return 1;
    console.log('round: ', num, recursiveFib(num - 1), '+', recursiveFib(num - 2));
    return  recursiveFib(num - 1) + recursiveFib(num - 2);
}

console.log(recursiveFib(6));
module.exports = recursiveFib;