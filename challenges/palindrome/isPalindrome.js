'use strict';

const isPalindrome = s => {

   let a = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   let b = a.split('').reverse().join().replace(/[^A-Za-z0-9]/g, '');
   return a === b ? true : false;

}

console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car'));//false
console.log(isPalindrome('aba'));
console.log(isPalindrome('ab_a'));