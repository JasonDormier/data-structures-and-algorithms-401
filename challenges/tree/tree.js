'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeSearch {
  constructor() {
    this.value = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) {
        return undefined;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;

      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      }

      else if (value > current.value) {
        current = current.right;

      } else {
        found = true;
      }
    }

    if (!found) {
      return undefined;
    }
    return found;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const arr = [];
    const preOrder = (node) => {
      arr.push(node.value);

      if (node.left) {
        preOrder(node.left);
      }

      if (node.right) {
        preOrder(node.right);
      }
    };

    let current = this.root;
    preOrder(current);
    return arr;
  }

  postOrder() {
    const arr = [];

    const postOrder = (node) => {
      if (node.left) {
        postOrder(node.left);
      }

      if (node.right) {
        postOrder(node.right);
      }
      arr.push(node.value);
    };

    let current = this.root;
    postOrder(current);
    return arr;
  }

  inOrder() {
    const arr = [];

    const inOrder = (node) => {

      if (node.left) {
        inOrder(node.left);
      }

      arr.push(node.value);

      if (node.right) {
        inOrder(node.right);
      }

    };

    let current = this.root;
    inOrder(current);
    return arr;

  }

  traverseWithStack() {
    let current = this.root;
    let stack = [];
    stack.push(current);

    while (stack.length) {
      console.log('traverse with stack:', current.value);
      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }

      current = stack.pop();
    }
  }

  breadth() {
    let current = this.root;
    let queue = [];

    queue.unshift(current);

    while (queue.length) {
      current = queue.pop();

      console.log('breadth:', current.value);

      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
    }
  }
}

module.exports = {
  'bT': BinaryTree,
  'bTS': BinaryTreeSearch,
  'node': Node,
};

//================ Kary Node class demo =================//

// class KaryNode {
//   constructor(value, size) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.children = new Array(size);
//   }

// }

// class KaryTree {
//   constructor(k) {
//     this.root = null;
//     this.k = k;
//   }

//   breadth() {
//     let current = this.root;
//     let queue = [];

//     queue.unshift(this.root);

//     while (queue.length) {
//       current = queue.pop();

//       console.log('kary tree breadth:', current.value);

//       for (let i = 0; i < queue.length; i++) {
//         if (current.children[i]) {
//           queue.unshift(current.children[i]);
//         }
//       }
//     }
//   }
// }

// const karyTree = new KaryTree(3);

// karyTree.root = new KaryNode(0, karyTree.k);
// karyTree.root.children[0] = new KaryNode(1, karyTree.k);
// karyTree.root.children[1] = new KaryNode(2, karyTree.k);
// karyTree.root.children[2] = new KaryNode(3, karyTree.k);
// karyTree.root.children[0].children[0] = new KaryNode(5, karyTree.k);

// karyTree.breadth();