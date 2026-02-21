'use strict';

class Queue {
    constructor() {
        this.queue = [];
    }
    
    //enqueue
    enqueue(value) {
        this.queue.push(value);
    }

    //dequeue
    dequeue() {
        if(this.queue.length === 0){
            console.log('The queue is empty');
            return;
        }
        const value = this.queue.shift();
        console.log(value);
        return value;

    }

    //front
    front() {
        console.log(this.queue[0]);
    }
}

const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
console.log(newQueue);
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
console.log(newQueue);