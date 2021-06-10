'use strict';

function recursiveFib(num){
    if(num <= 2) return 1;
    return  recursiveFib(num - 1) + recursiveFib(num - 2);
}

module.exports = recursiveFib;