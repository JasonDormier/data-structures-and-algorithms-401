'use strict';

// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

const strongPassword = (n, password) => {

    //const newPassword = '';

    // const numbers = '0123456789';
    // const lower_case = 'abcdefghijklmnopqrstuvwxyz'
    // const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // const special_characters = '!@#$%^&*()-+';

    let total = 0;
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    if(!/\d/.test(password)) total++;
    if(!/[A-Z]/.test(password)) total++;
    if(!/[a-z]/.test(password)) total++;
    if(!specialChars.test(password)) total++;
    if(n <= 3 || total < 6 - n) return 6 - n;
    if(n < 6) {
        let process = total - (6 - n);
        total = 6 - n + process;
    }
    return total;
}

console.log(strongPassword(3, 'Ab1')); //3
console.log(strongPassword(11, '#HackerRank'));//1
console.log(strongPassword(6, '@Bc3efg')); //0
console.log(strongPassword(4, '4700')); //3
console.log(strongPassword(4, 'IGEC')); //3
console.log(strongPassword(4, '1z2!')); //2
