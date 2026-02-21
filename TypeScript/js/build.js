"use strict";
;
const user = {
    name: 'Jason',
    age: 38
};
console.log(user);
const string = 'Jason';
const bigAssNum = 999_999_999;
const is_true = true;
console.log(bigAssNum);
let dumJS;
dumJS = 'Hey';
dumJS = 12;
function render(doc) {
    console.log(doc);
}
;
const jsNumArr = [1, 2, "3", "four"];
const numArr = [1, 2, 3, 4];
const correctNumArr = [1, 2, 3, 4];
const emptyNumArr = [];
const exampleTuple = [1, 'Todd'];
;
const mySize = 2;
console.log(mySize);
function doCalc(sumNum) {
    console.log(sumNum);
}
;
function doCalc2(sumNum) {
    return sumNum;
}
;
function doCalc3(sumNum) {
    console.log(sumNum);
}
;
const dudeBro = {
    id: 1,
    name: 'Brodude',
    age: 23,
    ageFromDate: (age) => {
        return age - 1985;
    }
};
function stringOrNumber(strNum) {
    if (typeof strNum === 'number')
        return strNum + 5;
    else
        return parseInt(strNum) + 10;
}
;
console.log(stringOrNumber(10));
console.log(stringOrNumber('10'));
const textBox = {
    drag: () => { },
    resize: () => { }
};
let cannotChange;
cannotChange = 101;
let theThing = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
;
const customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
let log = null;
log?.('a');
console.log(log);
//# sourceMappingURL=build.js.map