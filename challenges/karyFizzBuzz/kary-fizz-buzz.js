'use strict';

class KaryNode {
  constructor(value, size) {
    this.value = value;
    // this.left = null;
    // this.right = null;
    this.children = new Array(size);
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}

function fizzBuzzTree(kTree) {
  let newTree = new KaryTree(kTree.k);
  newTree.root = new KaryNode(kTree.root.value, kTree.k);

  let current = kTree.root;
  let currentTwo = newTree.root;
  let queue = [];
  let queueTwo = [];

  queue.unshift(current);
  queueTwo.unshift(currentTwo);

  while (queue.length) {
    current = queue.pop();
    currentTwo = queueTwo.pop();

    if (current.value % 15 === 0) {
      currentTwo.value = 'fizz buzz';
    }

    else if (current.value % 3 === 0) {
      currentTwo.value = 'fizz';
    }

    else if (current.value % 5 === 0) {
      currentTwo.value = 'buzz';
    }

    else {
      currentTwo.value = current.value.toString();
    }

    for (let i = 0; i < current.children.length; i++) {
      if (current.children[i]) {
        currentTwo.children[i] = new KaryNode(i, kTree.k);
        queue.unshift(current.children[i]);
        queueTwo.unshift(currentTwo.children[i]);
      }
    }
  }
  return newTree;
}

module.exports = {
  node: KaryNode,
  tree: KaryTree,
  fizzBuzz: fizzBuzzTree,
};
