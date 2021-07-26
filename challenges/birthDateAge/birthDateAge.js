'use strict';

//write a functon to dynamically calculate a persons age using the birthdate format year/month/date


//   2021/07/26
// - 1985/04/23
//   0036/03/03


//   2021/01/01
// - 1985/04/23
//   0036/-03 -22

//parse int the birthday string and make the data workable
//setup todays date as varibles
//subtract the year to get the persons age
//subtract the date and the month and store as varibles
//if either the date or month is a negative number subtract 1 from the year to get the persons age
// else return the age of the person 


const calculateAge = (birthdateStr) => {

    let age = 0;
    const todaysDate = [],
        date = new Date();
        todaysDate.push(date.getUTCFullYear());
        todaysDate.push(date.getMonth() + 1);
        todaysDate.push(date.getUTCDate());

    const birthday = birthdateStr.split('-').map(element => {
        return parseInt(element);
    })

    age = todaysDate[0] - birthday[0];
    const month = todaysDate[1] - birthday[1];
    const day = todaysDate[2] - birthday[2];
    
    return month < 0 || day < 0 ? age - 1 : age;
}

console.log(calculateAge('1965-07-05'));
console.log(calculateAge('2009-07-26'));
console.log(calculateAge('2006-12-11'));