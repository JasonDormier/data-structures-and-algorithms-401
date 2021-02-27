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

  push(node) {
    if (this.isEmpty()) {
      this.top = node;

    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    let temp = this.top;

    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  isEmpty() {
    return this.top === null;
  }
  peek() {
    if (this.isEmpty()) {
      return 'no node in stack';
    } else {
      return this.top.value;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue() {
    let temp = this.front;

    this.front = temp.next;
    temp.next = null;

    return temp.value;
  }

  isEmpty() {
    return this.front === null;
  }

  peek() {
    if (this.isEmpty()) {
      return 'no node in queue';
    } else {
      return this.front.value;
    }
  }
}

// let stack = new Stack();
// let nodeA = new Node('first');
// let nodeB = new Node('second');

// stack.push(nodeA);
// stack.push(nodeB);

// let top = stack.pop();

// console.log(top);

// let queue = new Queue();

// queue.enqueue(nodeA);
// queue.enqueue(nodeB);
// console.log(queue);

module.exports = {
  'stack': Stack,
  'queue': Queue,
  'node': Node,
};

