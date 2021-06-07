'use strict';

function stringReverse(str){
    return [...str].reverse().join('');
}

function reverseStringTwo(str){
    let newString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];   
    }
    return newString;
}

function reverseStringThree(str){
    if(str === '') return '';
    return reverseStringThree(str.substr(1)) + str[0];

}

console.log(reverseStringThree('test'));

module.exports = {
    'reverse': stringReverse,
    'reverse2': reverseStringTwo,
    'reverse3':reverseStringThree
}