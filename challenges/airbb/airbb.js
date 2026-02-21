'use strict';
 //given integer n return true if it is a power of 3 otherwise return false.

 const power3 = n => {
    if (n < 1) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
 }

 console.log(power3(0)); 
 console.log(power3(1)); 
 console.log(power3(3)); 
 console.log(power3(9));
 console.log(power3(27)); 
 console.log(power3(81)); 
 console.log(power3(243)); 
 console.log(power3(729)); 
 console.log(power3(2187)); 
 console.log(power3(6561)); 
 console.log(power3(19683)); 
 console.log(power3(262624)); 
 console.log(power3(5)); 
 