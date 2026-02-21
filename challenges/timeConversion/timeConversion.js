'use stirct';

function timeConversion(s) {
    // Write your code here

    if(s.includes('12') && s.includes('PM')) return s.replace('PM','');

    else if(s.includes('PM')) return s.replace(s.substring(0,2), +s.substring(0,2) + 12).replace('PM','');

    else if(s.includes('12') && s.includes('AM')) return s.replace(s.substring(0,2), +s.substring(0,2) - 12 + '0').replace('AM','');
    
    else return s.replace('AM', '');
}

console.log(timeConversion('07:05:45PM')); //19:05:45
console.log(timeConversion('12:00:00AM')); //00:00:00
console.log(timeConversion('12:05:05PM')); //12:05:05
console.log(timeConversion('09:26:32AM')); //09:26:32
console.log(timeConversion('12:45:54PM')); //12:45:54