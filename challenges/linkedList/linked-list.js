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

  traverse() {
    let current = this.head;

    while (current) {
      current = current.next;
      console.log(current);
    }
  }

  append(value) {
    let current = this.head;

    while (current) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }

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

  insertBefore(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);

    while (current.next !== null) {
      if (current.value === value) {

        newNode.next = current;
        this.head = newNode;

      } else if (current.next.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = new Node(newVal);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
      }
      current = current.next;
    }
  }

  kthFromEnd(k) {
    let current = this.head;
    if (current === null || k < 1) {
      return null;
    }

    let pointerOne = this.head;
    let pointerTwo = this.head;

    for (let i = 0; i < k - 1; i++) {
      if (pointerTwo === null) {
        return null;
      }
      pointerTwo = pointerTwo.next;
    }
    while (pointerTwo.next !== null) {
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next;
    }
    //console.log(p1);
    return pointerOne.value;
  }
}


const ll = new LinkedList();

ll.head = new Node(0);
ll.append(1);
ll.append(2);
ll.kthFromEnd(0);
ll.toString();



module.exports = {
  'll': LinkedList,
  'node': Node,
};