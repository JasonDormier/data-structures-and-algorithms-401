'use strict';

// this is a demonstration of what Async Await is doing under the hood
//generators

function createIter(arr) {
    let i = 0;
    return {
        next: function () {
            return i >= arr.length ? `No more data` : arr[i++];
        }
    };
};
const runInner = createIter([1,2,3])
const element1 = runInner.next();
const element2 = runInner.next();
const element3 = runInner.next();
const element4 = runInner.next();

console.log(element1, element2, element3, element4);


function* generator() {
    yield console.log('I am not going to appear untill the first next call');
    yield console.log('now doing a thing back inside the generator');
    yield console.log('now doing another thing inside the generator');
    
}

const runFirst = generator();
console.log(runFirst.next());//should return nothing???
console.log('Do a thing outside the generator');
console.log(runFirst.next()); //should show first console.log in generator;
console.log(runFirst.next()); //should show second console.log in generator;
console.log('Doing another thing outside the generator');
console.log(runFirst.next()); //should show last console.log in generator;
function* generator2(...arr) {
    yield* arr;
}

const testGen = generator2(1,2,3);
console.log(testGen.next());
console.log(testGen.next());
console.log(testGen.next());


function* createFlow () {
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}

const runFlow = createFlow();
const getFLowFirst = runFlow.next();
console.log(getFLowFirst.value)
console.log('run flow: ', runFlow.next(15));
console.log('run flow: ', runFlow.next());
console.log('run flow: ', runFlow.next());

function doWhenDataReceived(value) {
    returnNextEl.next(value);
}

function* newCreateFlow() {
    const data = yield fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json());
    console.log(data.forms[0].name);
}

const returnNextEl = newCreateFlow();
const futureData = returnNextEl.next();//initate the fetch call
futureData.value.then(doWhenDataReceived);//return our promise value into the unfulfilled array of the promise object;


async function newNewCreateFlow() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json();
    console.log('?', data.forms[0].name);
}
newNewCreateFlow();


console.log('I am still going to be before the fetches');