'use strict';

// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with correct change, or false otherwise.


//if the first bill is not a $5 bill return false
const lemonadeStand = (bills) => {

    let fives = 0;
    let tens = 0;

    if(bills[0] !== 5) return false;

    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) fives++;
        if(bills[i]=== 10) {
            tens++;
            if(fives === 0) return false;
            fives--;
        }

        if(bills[i] === 20){
            if(tens === 0 && fives < 3) return false;
            else if(tens === 0 && fives >= 3) fives -= 3;
            else if(fives === 0) return false;
            else{
                tens--;
                fives--;
            }
        }
    }
    return true;
}

console.log(lemonadeStand([5,5,5,10,20])); //true
console.log(lemonadeStand([5,5,10,10,20]));//false
console.log(lemonadeStand([5,5,10]));//true
console.log(lemonadeStand([10,10]));//false
console.log(lemonadeStand([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]));//true
console.log(lemonadeStand([5,5,5,5,20,20,5,5,20,5]));//false
