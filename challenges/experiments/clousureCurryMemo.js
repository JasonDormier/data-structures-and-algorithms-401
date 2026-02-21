'use strict';

//closure and higher order functions, memoization and currying. 

//higher order functions

//higher order functions

//This function is meh, what if we also needed to change the number besides 2, or if we want to sub, multiply, divide, or modulo?
const copyArrAddBy2 = (arr) => {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] + 2);
    }
    return output;
};
console.log(copyArrAddBy2([1, 2, 3]));

const copyArrDoMath = (arr, func) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(func(arr[i]));
    }
    return output
}

const addd = (a) => a + 2;
const subtractt = (a) => a - 2;
const multiplyy = (a) => a * 2;
const dividee = (a) => a / 2;
console.log(copyArrDoMath([1, 2, 3], addd));
console.log(copyArrDoMath([1, 2, 3], subtractt));
console.log(copyArrDoMath([1, 2, 3], multiplyy));
console.log(copyArrDoMath([1, 2, 3], dividee));


//closure is returning an inner function and running assigned to a new variable. That inner variable then has access the to state of the function when it was created. Creating its own closure or backpack of data.

function outter() {
    let index = 0;
    function inner() {
        return ++index;
    }
    return inner;
}
const runInner = outter(); // assign the inner function to a new variable to be run
const anotherInner = outter();// another assignment of inner that will contain its own seperate state.
console.log(runInner());//1
console.log(anotherInner())//1
console.log(runInner());//2
console.log(anotherInner())//2
console.log(anotherInner())//3

//lets curry

function curry(a) {
    return function (b) {
        return a + b;
    }
}

const add10 = curry(10) //we are passing 10 in as a so code at return a + b will be ----> return 10 + b
const sumWith10 = add10(20) // now b will be passed in because we are running in the inner function which will return 30;
console.log(sumWith10); //30

//here is a more powerful use of currying 

function passFunc(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c)
            }
        }
    }
}

function add(x, y, z) {
    return x + y + z;
}

function multiply(x, y, z) {
    return x * y * z;
}

const runWithAdd = passFunc(add);
console.log(runWithAdd(2)(4)(6));//12 -> passing in 2 as a 4 as b and 6 as c, this is the shorthand we don't need to create a bunch of variable to pass down the values

const runWithMultiply = passFunc(multiply);
console.log(runWithMultiply(2)(4)(6));//48 --> same concept but with multiplication. 


//partial application 

const multiply2 = (a, b) => a * b;

function preFilledFunction(fn, preFilledValue) {
    return function (liveInput) {
        return fn(liveInput, preFilledValue)
    }
}

function preFilledFunction(fn) {
    return function (liveInput1) {
        return function (liveInput2) {
            return fn(liveInput1, liveInput2);
        }
    }
}

const multiplyBy5 = preFilledFunction(multiply2, 5);
console.log(multiplyBy5(4));//20

function preFilledFunction(fn) {
    return function (liveInput1) {
        return function (liveInput2) {
            return fn(liveInput1, liveInput2);
        }
    }
}


const mutiplyNumbers = preFilledFunction(multiplyy);

console.log(mutiplyNumbers(4)(3)) //12


//.bind .apply
function foo() {
    return this.bar;
}

function taco() {
    return `best: ${this.best}, meh: ${this.meh}, worst: ${this.worst}`

}

function bind(fn, context) {
    return function (...args) {
        return fn.apply(context, args);
    }
}

function otter() {
    const obj = {
        best: 'chicken',
        meh: 'beef',
        worst: 'veggie'
    }

    return function () {
        return `best: ${obj.best}, meh: ${obj.meh}, worst: ${obj.worst}`
    }
}

function word() {

}

console.log('What is this?', 'call: ', word.call({ word: 'word' }));


const numbers = [1, 2, 3];
console.log('apply without this: ', Math.max.apply(null, numbers));

const baz = bind(foo, { bar: 'Hello' });

const tacos = bind(taco, { best: 'Chicken', meh: 'beef', worst: 'veggie' });

const dink = foo.bind({ bar: 'Hello built in bind' })
console.log(dink());
console.log(baz());
console.log(tacos());

const waterOtter = otter();
console.log(waterOtter());

function log(...args) {
    console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
console.log(boundLog2(5, 6)); // "this value", 1, 2, 3, 4, 5, 6

//memoize

function memoizeFibonacci() {
    const cache = {}; //this is the key to memoization this and that fact that this closure stores the state of our inner function.

    function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
    return fib;
}

const fibonacci = memoizeFibonacci();
console.log(fibonacci(900));
console.log(fibonacci(25));
console.log(fibonacci(30));

function memoize(fn) {
    const cache = {};
    return function memoizedFn(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        const result = fn(memoizedFn, n); // Pass memoizedFn as the first argument to fib
        cache[n] = result;
        return result;
    };
}

function fib(memoizedFn, n) { // Adjust fib to accept the memoized function
    if (n <= 1) return n;
    return memoizedFn(n - 1) + memoizedFn(n - 2); // Use memoizedFn for recursive calls
}

const memoizedFib = memoize(fib);

console.log(memoizedFib(600)); // Expect 5
