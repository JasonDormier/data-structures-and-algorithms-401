'use strict';

function isPalindrome(str){
    
    const helper = function(str){
        if(str === '') return '';
        return helper(str.substr(1)) + str[0];
     }
    if(helper(str) === str) return true;
    else return false;
}

module.exports = isPalindrome;