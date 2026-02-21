'use strict';
//building a prototype libaray where it starts to what the best practice is...

//manuel entering of each object is not sustainable
const user1 = {};
const user2 = Object.create(null);//<--- creating an object that is not linked to the prototype chain

user1.name = 'Tim';
user1.score = '3';

user2.name = 'Frank';
user2.score = '4';

user1.increment = function () {
    user1.score++;
}
user2.increment = function () {
    user2.score++;
}
user1.increment();
user2.increment();
console.log(user1);
console.log(user2);

//solution 1 of creating a user so we don't have to do this manually. 

const userCreator = (name, score) => {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    }
    return newUser;
}

const user3 = userCreator('Betty', 2);
user3.increment();
console.log(user3);
//this doesn't work because each one of these created users has it's own copy of the increment function. 

//solution 2 store the increment function in just one object and reference it with our user object using the Prototype chain. This is how you would demonstrate creating the prototype chain if asked or how to build what the keyword 'new' does when creating a new object from a function in solution 3

const userCreator2 = (name, score) => {
    const newUser = Object.create(functionStore);//passing in our store of functions in or functionStore object
    newUser.name = name;
    newUser.score = score;
    return newUser;
}
//creating an object of methods that we pass into our Object.create so that our newly created objects have a reference... creating our prototype chain
const functionStore = {
    increment: function () { this.score++ },//this always refer to the object of the left hand side of the .
    login: function () { return 'You are logged in' }
}

const user4 = userCreator2('Piper', 8);
user4.increment();
console.log(user4);//notice that user4 no longer has the functions attached to the object, but on the lines before and after we see that we can run those functions we created in the function store, which demonstrates the prototype chain.
console.log(user4.login());
console.log(user4.__proto__);


//creating a sub class under the hood...
function premiumUserCreator(premiumName, premiumScore, premiumBalance) {
    const newPremiumUser = userCreator2(premiumName, premiumScore);
    Object.setPrototypeOf(newPremiumUser, premiumUserFunctions);
    newPremiumUser.balance = premiumBalance;
    return newPremiumUser
}

const premiumUserFunctions = {
    increaseBalance : function() {this.balance++}
}

const premiumUser1 = premiumUserCreator('Betty', 10, 25);
Object.setPrototypeOf(premiumUserFunctions, functionStore);
premiumUser1.increaseBalance();
premiumUser1.increment()
console.log(premiumUser1.balance, premiumUser1.score);


//function are both functions and objects, and objects have protoypes we can use to store our own prototype methods
function multiplyBy2(num) {
    return num * 2;
}
// multiplyBy2.stored = 5;
// console.log('running the function: ', multiplyBy2(3));
// console.log('operating as an object: ', multiplyBy2.stored);
// console.log('how multiplyBy2(); identifies: ', multiplyBy2.prototype);

const obj = {
    num: 3,
    increment : function() {this.num++}
}

const obj2 = {
    num : 10
}

obj.increment();
console.log(obj.num)

obj.increment.call(obj2);
console.log(obj2.num)