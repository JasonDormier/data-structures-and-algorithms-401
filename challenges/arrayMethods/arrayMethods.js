'use strict';

//at array method

const atArray = [1, 5, 7, 8, 9, 10];

const atTest = atArray.at(2);
const atTest2 = atArray.at(-2);

console.log('This is the "at" array method test: ', atTest);
console.log('This is the "at" array method test: ', atTest2);

//concat array method

const concatArr1 = [1, 2, 3];
const concatArr2 = [4, 5, 6];
const concatArr3 = [7, 8, 9];

const concatTest = concatArr1.concat(concatArr2, concatArr3);

console.log('This is the "concat" array method test: ', concatTest);

const newArray = new Array(12).fill('');
console.log(newArray);
console.log(newArray.length);

const arrSlice = concatArr1.slice(0, 2);
console.log(arrSlice) // 123


const everyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const everyCallBack = (element) => {
    return element < 20;
}

console.log(everyArr.every((element) => {
    return element < 20;
}));

console.log(everyArr.every((element) => {
    return element < 9;
}));

console.log(everyArr.every(everyCallBack));

const filteredArray = everyArr.filter(element => { return element >= 5 });
console.log(filteredArray);

const foreachArray = [];
filteredArray.forEach(element => { foreachArray.push(element * 2) });
console.log(foreachArray);

const mapped = filteredArray.map ((element, index) => { return (element * 3) + index });
console.log(mapped);

//reduce
//implict return
const sum = mapped.reduce((acc, current, index) =>  acc + current, 0);
const sum2 = mapped.reduce((acc, current, index) =>  { return acc + current} , 0);
console.log(sum);
console.log(sum2);

const sum3 = [1,2,3,4,5].reduce((acc, cur) => acc + cur, 0);
console.log('sum3: ', sum3);

//implict return
const max = mapped.reduce((acc, cur, index) => acc > cur ? acc : cur, mapped[0]);
const max2 = mapped.reduce((acc, cur, index) => { return acc > cur ? acc : cur }, mapped[0]);
console.log(max);
console.log(max2);

console.time('fruits reduce');
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'orange'];
const count = fruits.reduce((acc, fruit) => {
    console.log('acc: ', acc)
    console.log(`fruit: ${fruit}, acc[fruit]: ${acc[fruit]}`);
    //the inital value is an object, that object is acc we are refering to the fruit with the current value and placing fruit in the object 
  //acc[fruit] = (acc[fruit] || 0) + 1;
  !acc[fruit] ? acc[fruit] = 1 : acc[fruit]++;
  return acc;
}, {});
console.timeEnd('fruits reduce');
console.log(count);

const multplyEach = (...theArgs) => {
    console.log('the args: ', theArgs);
    return theArgs.reduce((acc, cur) => acc * cur, 1);
}
console.log(...everyArr);
console.log(multplyEach(...everyArr));

const [first, second, third, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(first); //1
console.log(second);//2
console.log(third);//3
console.log(rest)//[4,5,6,7,8,9,10]
console.log(...rest)//4 5 6 7 8 9 10 ...we are spreading these out.

const {firstName, lastName, ...remaining} = {firstName: 'Ben', lastName: 'Franklin', age: '250', location: 'East Coast'}
console.log(firstName); //Ben
console.log(lastName); //Franklin
console.log(remaining); // { age: 250, location: East Coast }
console.log(remaining.age)// 250
console.log(remaining.location)// East Coast
//console.log(...remaining) // 250 East Coast //error because it doesn't have the prototype @@iterator

const spreadArr = [1, 2, 3, 4];
const spreadArr2 = [1, 2, 3, 4, 5];
const spreadArr3 = [...spreadArr, ...spreadArr2];
console.log(spreadArr3);
const [one, two, ...remainder] = spreadArr3;
console.log(one);
console.log(two);
//and spread again
console.log(...remainder);


