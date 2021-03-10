'use strict';

const binaryTree = require('../binary-tree.js');

describe('Testing binary tree', () => {

  const bt = new binaryTree.bT();
  bt.root = new binaryTree.node(5);
  bt.root.left = new binaryTree.node(6);
  bt.root.right = new binaryTree.node(7);


  it('can successfully find the max number in the tree', () => {

    const max = bt.findMaxValue();

    expect(max).toEqual(7);

  });
  it('can successfully breadth first traverse the binary tree', () => {

    const breadth = bt.breadthFirstTraversal();

    expect(breadth).toEqual([5, 6, 7]);

  });

});