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
}

module.exports = {
  'bT': BinaryTree,
  'node': Node,
};