'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.value = null;
  }

  findMaxValue() {
    let current = this.root;
    if (!current) {
      throw 'no nodes in tree';
    }

    const findMax = (node) => {
      if (node === null) {
        return;
      }

      let max = node.value;
      let leftMax = findMax(node.left);
      let rightMax = findMax(node.right);

      if (leftMax > max) {
        max = leftMax;
      }

      if (rightMax > max) {
        max = rightMax;
      }
      return max;
    };
    return findMax(current);
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
  breadthFirstTraversal() {
    let current = this.root;
    const levels = [];

    const traverse = (node, depth) => {
      const array = levels[depth];

      if (!node) {
        return null;
      }

      if (!levels[depth]) {
        levels[depth] = [node.value];

      } else {
        array[array.length] = node.value;
      }

      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    };

    traverse(current, 0);

    const flatten = (arr, result = []) => {

      for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (Array.isArray(value)) {
          flatten(value, result);

        } else {
          result[result.length] = value;
        }
      }
      return result;
    };
    return flatten(levels);
  }
}

module.exports = {
  'bT': BinaryTree,
  'node': Node,
};