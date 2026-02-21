'use strict';

// James found a love letter that his friend Harry has written to his girlfriend. James is a prankster, so he decides to meddle with the letter. He changes all the words in the letter into palindromes.

// To do this, he follows two rules:
// 1. He can only reduce the value of a letter by , i.e. he can change d to c, but he cannot change c to d or d to b.
// 2. The letter a may not be reduced any further.
// Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert a given string into a palindrome.

function theLoveLetterMystery(s) {
    let x = 0, y = s.length - 1, count = 0;

    while (x <= y) {

        if(s[x] !== s[y]){
            count += Math.abs(s[x].codePointAt(0) - s[y].codePointAt(0));
        }
        y--;
        x++;
    }
    return count;
}

console.log(theLoveLetterMystery('abc')); //2
console.log(theLoveLetterMystery('abcba')); //0
console.log(theLoveLetterMystery('abcd')); //4
console.log(theLoveLetterMystery('cba')); //2

console.log(theLoveLetterMystery('lmnop'));
console.log(theLoveLetterMystery('adslkfjas'));
console.log(theLoveLetterMystery('bafhaef'));
console.log(theLoveLetterMystery('ofrhase'));
