'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = new Node;
    }

    deque() {
        if(!this.front) {
            console.log('There is nothing in the queue');
            return;
        }

        if(!this.front.next) {
            const value = this.front.value;
            this.front = null;
            this.rear = null;
            console.log(`${value} is done, there nothing else in line`);
            return value;
        } else {
            const value = this.front.value;
            this.front = this.front.next;
            console.log(`${value} is done, ${this.front.value} is next in line`);
            return value;
        }
    }

    first() {
        if(!this.front){
            console.log('This is nothing in the queue');
            return;
        }
        console.log(`${this.front.value} is in front, ${this.front.next.value} is next in line`);
    }
}

const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.deque();
newQueue.first();
newQueue.enqueue(4);
newQueue.enqueue(5);
console.log(newQueue);
newQueue.deque();
newQueue.deque();
newQueue.deque();
newQueue.deque();
newQueue.deque();