'use strict';

const binaryTree = require('../tree.js');

describe('Testing binary tree and binary tree search', () => {

  const bt = new binaryTree.bT();

  it('can successfully instantiate an empty tree', () => {

    expect(bt.root).toEqual(null);
  });

  it('can successfully instantiate a tree with a single root node', () => {
    bt.root = new binaryTree.node(5);
    expect(bt.root.value).toEqual(5);
  });

  it('can successfully add a left child and right child to a single root node', () => {
    bt.root = new binaryTree.node(5);
    bt.root.left = new binaryTree.node(6);
    bt.root.right = new binaryTree.node(7);

    expect(bt.root.value).toEqual(5);
    expect(bt.root.left.value).toEqual(6);
    expect(bt.root.right.value).toEqual(7);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    bt.root = new binaryTree.node(5);
    bt.root.left = new binaryTree.node(6);
    bt.root.right = new binaryTree.node(7);

    const preOrder = bt.preOrder();
    const preOrderIter = bt.preOrderIter();

    expect(preOrder).toEqual([5, 6, 7]);
    expect(preOrderIter).toEqual([5, 6, 7]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    bt.root = new binaryTree.node(5);
    bt.root.left = new binaryTree.node(6);
    bt.root.right = new binaryTree.node(7);

    const inOrder = bt.inOrder();

    expect(inOrder).toEqual([6, 5, 7]);
  });

  it('can successfully return a collection from a postorder traversal', () => {

    bt.root = new binaryTree.node(5);
    bt.root.left = new binaryTree.node(6);
    bt.root.right = new binaryTree.node(7);

    const postOrder = bt.postOrder();
    console.log(postOrder);

    expect(postOrder).toEqual([6, 7, 5]);

  });
});
