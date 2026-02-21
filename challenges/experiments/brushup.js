'use strict'

//writing some basic things
const fruit = 'strawberry';
let processedFruit = 'strawberry';
processedFruit = 'jam';

console.log(processedFruit);

//mutlple ways to write a function

function add(a,b) {
    return a+b;
}

console.log(add(1,2));

const subtract = (a,b) => {
    return a-b;
}

console.log(subtract(3, 1));

//do we actually remeber who to curry
//curry is returning a function to be used im different ways later

function curry(a) {
    return function(b) {
        return a + b;
    }
}

const add5 = curry(5);

console.log(add5(10));

const arr = [1,2,3,4,5,6,7,8,9];

//proper
// const mapArr = arr.map(el => {el * 2});

//shorthand
const mapArr = arr.map(el => el * 3);
console.log(mapArr);

//filter for evens
const filteredArrEven = mapArr.filter(el => el % 2 === 0);
const filteredArrOdd = mapArr.filter(el => el % 2 !== 0);

console.log(filteredArrEven);
console.log(filteredArrOdd);

