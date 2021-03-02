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

function zipLists(l1, l2) {
  const newll = new LinkedList();
  l1 = l1.head;
  l2 = l2.head;
  newll.head = new Node(l1.value);
  l1 = l1.next;
  while (l1 || l2) {
    if (l1 && l2) {
      newll.append(l2.value);
      newll.append(l1.value);
      l2 = l2.next;
      l1 = l1.next;
    }
    else if (l1 === null && l2) {
      newll.append(l2.value);
      l2 = l2.next;
    }
    else if (l1 && l2 === null) {
      newll.append(l1.value);
      l1 = l1.next;
    } else {
      return;
    }
  }
  return newll.toString();
}

// const ll = new LinkedList();

// ll.head = new Node(1);
// ll.append(2);
// ll.append(3);
// ll.append(7);
// ll.append(9);
// ll.append(10);
// //ll.toString();

// const llTwo = new LinkedList();

// llTwo.head = new Node(4);
// llTwo.append(5);
// llTwo.append(6);
// llTwo.append(8);
// //llTwo.toString();

// zipLists(ll, llTwo);

module.exports = {
  'll': LinkedList,
  'node': Node,
  'zip': zipLists,
};