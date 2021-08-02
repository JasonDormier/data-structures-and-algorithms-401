'use strict';

const lengthOfLastWord = s => {

   let strings = s.trim().split(' ');
   return strings[strings.length -1].length

    //return s.trim().split(' ').pop().length; one liner
}

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord(''));
console.log(lengthOfLastWord('a'));
console.log(lengthOfLastWord('a '));