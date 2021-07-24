'use strict';

const isValid = (s) => {

    if(s.length % 2 === 1) return false;
    const stack = [];
    const map = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };

    for(let key of s){
        if( key === '(' || key === '[' || key === '{'){
            //stack.push(key);
            stack[stack.length] = key;
        }
        else if(stack.pop() !== map[key]) return false;
    }
    return stack.length > 0 ? false : true;
}

console.log(isValid('()')); // is true
console.log(isValid('()[]{}')); // is true
console.log(isValid('(]')); //is false
console.log(isValid('([)]'));// is false
console.log(isValid('{[]}')); //is true
