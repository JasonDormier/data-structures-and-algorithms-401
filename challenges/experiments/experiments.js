'use strict';

const test = () => {

    const s = [5, '5', 'd', '5s'];

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) console.log(`${s[i]} is a number`);
        else console.log(s[i], 'is not a number');
    }
}

const curry = (a) => {
    return function (b) {
        return a + b;
    }
}

const addTen = curry(10);

console.log(addTen(2));

const s = 'hello world';

console.log(s.slice(5));
console.log('hello'.length);

//look in Tagged template literals
//A more advanced feature of template literals is tagged templates, which allow parsing template literals through a function.
function bold(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let bolded = values[i] ? `<b>${values[i]}</b>` : '';
        return result + str + bolded;
    }, '');
}
let adjective = 'amazing';
let noun = 'JavaScript';

let sentence = bold`Learning ${adjective} concepts in ${noun} is fun!`;
console.log(sentence);

// How It Works:
// In the tagged template bold, the strings array contains the static parts of the template (["Learning ", " concepts in ", " is fun!"]).
// The values array contains the evaluated expressions from the template (["amazing", "JavaScript"]).
// The bold function then reconstructs the string, wrapping the values in <b> tags.
// This is a basic example, but tagged templates can be much more complex, allowing for custom logic to process template literals, such as localization, styled components in web frameworks, escaping HTML for security, and more. They provide a way to extend the functionality of template literals beyond simple string interpolation.



const map = {};
const str = 'abcdeffff';
for (let i = 0; i < str.length; i++) {
    !map[str[i]] ? map[str[i]] = 1 : map[str[i]]++;
}
//for.. in doesn't do what I need because I need to compare values and you can't loop through objects otherwise
//Create an array from your object keys, now you can loop through your object using the keys to access your values and make comparisons with next and previous values in your object. 
const key = Object.keys(map); //-----> different solution below
console.log(key);
for (let i = 1; i < key.length - 1; i++) {
    console.log(` ${key[i - 1]} : ${map[key[i - 1]]}, ${key[i]} : ${map[key[i]]}, ${key[i + 1]}: ${map[key[i + 1]]}`);
}

//can't access next and previous 
for (let letter in map) {
    console.log(` for in loop: ${letter} : ${map[letter]}`);
    console.log(` for in loop: ${letter + 1} : ${map[letter + 1]}`);
}
//still can't access next and previous
for (const [key, value] of Object.entries(map)) {
    console.log(`for of: ${key} : ${value}`);
}

console.log(Object.entries(map));


// closure or Lexical Scope Reference
function outter() {
    let counter = 0;
    function inner() {
        counter++;
        //console.log(`counter: ${counter}`);
        return counter;
    }
    //returning the whole function but not running it
    //console.log(inner);
    return inner;
}
const closure = outter();
closure();
closure();
closure();
console.log('closeure: ', closure());
console.log('closeure def function: ', closure.counter);
//console.log('counter', counter)//should return counter is not defined




//solution 3 inserting the "new" keyword automates the above process
function UserCreator(name, score) {// this is the same as the constructor function of a class
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function () {
    this.score++;
}

UserCreator.prototype.login = function () {
    return 'You are logged in';
}

const user5 = new UserCreator('Calvyn', 1);
user5.increment();
console.log(user5);
console.log(user5.__proto__);

//solution 4 the industry standard but really just syntatic sugar of the previous solution

class UserCreator2 {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++;
    }
    login() {
        return 'You are logged in';
    }
}

const user6 = new UserCreator2('Billy', 3);
user6.increment();
console.log(user6);
console.log(user6.__proto__);

const newPerson = new testFunction2('ben');
console.log(newPerson);
//not going to work
const testFunction = (name) => {
    console.log(`you can't run me before I am declared`);
    this.name = name;
}

function testFunction2(name) {
    console.log(`You can run me whereever you want`);
    this.name = name;
    return name;
}

this.a = 'test';
console.log(this);
console.log(global);

function WhatIsThis(name) {
    this.name = name;
}
WhatIsThis.prototype.nameChange = function (name) {
    this.name = name;
}
WhatIsThis.prototype.whoAmI = function () { return this }



// const theeObject = {
//     nameChange : function(name){this.name = name},
//     whoAmI : function(){return this}
// }
const person = new WhatIsThis('Ted');
console.log(person);
person.nameChange('Sherry');
console.log(person);
console.log(person.whoAmI());
console.log('Module this: ', this);

class understandingThis {
    constructor(grocks) {
        this.understand = grocks;
    }
}

const iGrock = new understandingThis('I grock!');
console.log(iGrock.understand);


let lame = 'Becky';
const name2 = lame;

console.log(lame);
console.log(name2);
// let name3 = lame;
lame = 'Steve'
console.log(lame);
console.log(name2);

const came = {
    'name': 'Balls'
};

const came2 = came;

console.log(came);
console.log(came2);

came2.name = 'Nutz'
console.log(came);
console.log(came2);

function restVspread(...args) {
    console.log('args passed in with rest: ', args);
    console.log('args spread out: ', ...args);
    console.log('args spread into another array: ', [...args])
}

console.log(restVspread(1, 2, 3));

function func(){
    return null;
};

const object = {
    name : 'Tim'
};

const string = 'Tim';
const num = 12;
const array = [1,2,3];
const bool = true;

//visualizing function prototypes
const prototypeObject = Object.getPrototypeOf(object);
const prototypeFunction = Object.getPrototypeOf(func);
const prototypeString = Object.getPrototypeOf(string);
const prototypeNumber = Object.getPrototypeOf(num);
const prototypeArray = Object.getPrototypeOf(array); 
const prototypeBool = Object.getPrototypeOf(bool); 
console.log('Function: ', Object.getOwnPropertyNames(prototypeFunction));
console.log('Object: ', Object.getOwnPropertyNames(prototypeObject));
console.log('String: ', Object.getOwnPropertyNames(prototypeString));
console.log('Number: ', Object.getOwnPropertyNames(prototypeNumber));
console.log('Array: ', Object.getOwnPropertyNames(prototypeArray));
console.log('Bool: ', Object.getOwnPropertyNames(prototypeBool));



const dupsInStr = 'This is is a a sentence that that has has duplicates';

function removeDups(str) {
    const arr = str.split(' ')
    const set = new Set(arr);
    return [...set].join(' ');
}

console.log(removeDups(dupsInStr));

function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? 
         result = result.concat(flatten(arr[i])) :
         result.push(arr[i]);
    }

    return result;
}

function flatten2(arr) {
    return arr.reduce((acc, curr) => {
        Array.isArray(curr) ?
         acc = acc.concat(flatten(curr)) :
         acc.push(curr);
        return acc;
    }, [])
}

console.log(flatten([1,2,3,[1,2,3, [1,2,3]], 4,5,6]));
console.log(flatten2([1,2,3,[1,2,3, [1,2,3]], 4,5,6]));


console.log('a'.codePointAt(0));
console.log('a'.codePointAt(0).toString(16)); //hex
console.log('a'.codePointAt(0).toString(2)); //binary
console.log('a'.codePointAt(0).toString(10)); //decimal
console.log('A'.codePointAt(0));
console.log('A'.codePointAt(0).toString(16));

