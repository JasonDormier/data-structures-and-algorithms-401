'use strict';

const binaryTree = require('../binary-tree.js');

describe('Testing binary tree', () => {


  it('can successfully find the max number in the tree', () => {
    const bt = new binaryTree.bT();
    bt.root = new binaryTree.node(5);
    bt.root.left = new binaryTree.node(6);
    bt.root.right = new binaryTree.node(7);

    const max = bt.findMaxValue();

    expect(max).toEqual(7);

  });

});