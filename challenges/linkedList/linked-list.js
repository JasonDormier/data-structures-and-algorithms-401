'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // traverse() {
  //   let current = this.head;

  //   while (current) {
  //     current = current.next;
  //     console.log(current);
  //   }
  // }

  // append(value) {
  //   let current = this.head;

  //   while (current) {
  //     if (current.next === null) {
  //       current.next = new Node(value);
  //       return;
  //     }
  //     current = current.next;
  //   }
  // }

  insert(value) {
    let current = this.head; //assigning head to current
    let newNode = new Node(value); //creating a new node and assigning it newNode
    if (!current) {
      this.head = newNode;
    } else {
      newNode.next = current; // shifting the previous head to the position of next
      this.head = newNode; //assigning head to the new node
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {

      if (value === current.value) {
        return true;

      } else if (current.next === null) {
        return false;

      } else {
        current = current.next;
      }
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      let banana = current.value;
      current = current.next;
      string += `{${banana}} --> `;
    }
    string += '{null}';
    console.log(string);
    return string;
  }
}

module.exports = {
  'll': LinkedList,
  'node': Node,
};