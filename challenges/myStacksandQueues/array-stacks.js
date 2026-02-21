'use strict';

class Stack {
    constructor() {
        this.stack = [];
    }

    //push
    push(value) {
        this.stack.push(value);
    }

    //pop
    pop() {
        if(this.stack.length === 0 ){
            console.log('There is nothing in the stack');
            return;
        }
        const value = this.stack.pop();
        console.log(value);
        return value;
    }

    //peek
    peek() {
        console.log(this.stack[0]);
    }
}

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.push(6);
console.log(newStack);
newStack.pop();
console.log(newStack);
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
console.log(newStack);
