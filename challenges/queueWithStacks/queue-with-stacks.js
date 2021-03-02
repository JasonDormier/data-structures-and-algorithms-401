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
    return temp;
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

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(node) {

    this.rear.push(node);
  }
  dequeue() {
    if (this.front.isEmpty()) {
      while (!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }
    return this.front.pop();
  }
}

module.exports = {
  'stack': Stack,
  'pseudoqueue': PseudoQueue,
  'node': Node,
};

