'use strict';

const { node } = require("../tree/tree");

// inOrder recursive trversale

const inOrder = (root) => {
    const arr = [];
    const inOrder = (val) => {
        if (val.left) inOrder(val.left);
        arr.push(val.value);
        if (val.right) inOrder(val.right);
    }
    inOrder(root)
    return arr;
}

const preOrder = (root) => {
    const arr = [];
    const preOrder = (node) => {
        if(!node) return;
        arr.push(node.val);
        if(node.left)preOrder(node.left);
        if(node.right)preOrder(node.right);
    }
    preOrder(root);
    return arr;
}

const postOrder = (root) => {
    const arr = [];

    const postOrder = (node) => {
        if(!node) return;
        if(node.left) postOrder(node.left);
        if(node.right)postOrder(node.right);
        arr[arr.length] = node.val;
    }
    postOrder(root);
    return arr;
}