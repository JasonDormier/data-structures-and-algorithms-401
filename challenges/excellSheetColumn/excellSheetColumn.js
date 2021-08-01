'use strict';

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

//use an object to assign a number value to each letter.
const convertToTitle = (columnNumber) =>{

    console.log(columnNumber);
    console.log('a'.charCodeAt(0));
    console.log('A'.charCodeAt(0));

}

console.log(convertToTitle(1))// = 'A'
console.log(convertToTitle(28))// = 'AB'
console.log(convertToTitle(701))// = 'ZY'
console.log(convertToTitle(703))// ='AAA'
console.log(convertToTitle(2147483647)) // = 'FXSHRXW'