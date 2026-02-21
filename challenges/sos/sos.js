'use stirct';

//Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.
//Example: SOSOT
//The original message was SOSSOS. Two of the message's characters were changed in transit.

const sos = (s) => {
    let count = 0;
    const key = 'SOS';
    let j = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== key[j]) count++;
        j++;
        if(j === key.length) j = 0;
    }
    return count;
}

console.log(sos('SOSSOT')); //1
console.log(sos('SOSSPSSQSSOR')); //3
console.log(sos('SOSOOSOSOSOSOSSOSOSOSOSOSOS')); //12
console.log(sos('SOSSOSSSSOSOIEISOSPOISOSIUSISO')); //14
console.log(sos('QQQ')); //3

