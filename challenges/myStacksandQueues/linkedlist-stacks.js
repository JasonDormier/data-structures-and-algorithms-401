'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    //push
    push(value) {
        const newNode = new Node(value);
        if(!this.top) {
            this.top = newNode;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
    }

    //pop
    pop() {
        if(!this.top) {
            console.log('There are no nodes in the stack');
            return;
        }

        if(!this.top.next){
            const value = this.top.value;
            this.top = null;
            console.log(value);
            return value;
        }else{
            const value = this.top.value;
            this.top = this.top.next;
            console.log(`${value} has been popped`);
            return value;
        }
    }
    
    //peak
    peak() { // yeah, peak not peek. Get it?
        if(!this.top) console.log('The are no nodes in the stack');
        else console.log(this.top.value);
    }
}

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.peak();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
console.log(newStack);