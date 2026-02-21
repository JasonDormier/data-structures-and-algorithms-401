'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class searchTree {
    constructor() {
        this.root = null;
    }

    //insert
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode; // if no root assign the newNode as the root
            return;
        }
        const insert = (current) => {
            if (value <= current.value) { //we are going left
                if (!current.left) current.left = newNode;
                else insert(current.left);
                current = current.left;
            } else { //we are going right
                if (!current.right) current.right = newNode;
                else insert(current.right);
                current = current.right;
            }
        }
        insert(this.root);
    }

    //insert
    insertNew(value, current = this.root) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode; // if no root assign the newNode as the root
            return;
        }

        if (value <= current.value) { //we are going left
            if (!current.left) current.left = newNode;
            else this.insert(value, current.left);
        } else { //we are going right
            if (!current.right) current.right = newNode;
            else this.insert(value, current.right);
        }
    }

    insertWhile(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (current) {
            if (value <= current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                } else {
                    current = current.right
                }
            }
        }
    }

    //contains recursive
    contains(value, current = this.root) {
        // const contains = (current, ) => {
        if (!current) return false;
        if (current.value === value) return true;
        if (value <= current.value) return this.contains(value, current.left);
        else return this.contains(value, current.right);
        // }
        // return contains(this.root);
    }

    //contains with while loop
    containsWhile(value) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            }
            if (value <= current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    //traverse inOrder
    inOrder(node = this.root) {
        if (!this.root) {
            console.log('Tree is empty');
            return;
        }
        if (node.left) this.inOrder(node.left);
        console.log(node.value);
        if (node.right) this.inOrder(node.right);
    }

    //traverse preOrder
    preOrder() {
        if (!this.root) {
            console.log('Tree is empty');
            return;
        }
        const preOrder = (node) => {
            console.log(node.value);
            if (node.left) preOrder(node.left);
            if (node.right) preOrder(node.right);
        }
        preOrder(this.root);
    }

    //traverse postOrder
    postOrder(node = this.root) {
        if (!node) return -1;
        if (node.left) this.postOrder(node.left);
        if (node.right) this.postOrder(node.right);
        console.log(node.value);
    }

    //reverse the tree
    reverse(node = this.root) {
        if (!node) return;
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        this.reverse(node.left);
        this.reverse(node.right);
    }
    //both min max in a while loop
    minMax(node = this.root) {
        const arr = [];
        if (!node) return;

        while (node.left) {
            node = node.left;
        }
        if (node && !node.left) arr.push({'min' : node.value});

        node = this.root;

        while (node.right) {
            node = node.right;
        }
        if(node && !node.right) arr.push({'max' : node.value});
        return arr;
    }

    //min
    min(node = this.root) {
        if (!node) return;
        if (!node.left) return node.value;
        return this.min(node.left);
    }

    //max
    max(node = this.root) {
        if (!node) return;
        if (!node.right) return node.value;
        return this.max(node.right);
    }
    
    total(node = this.root) {
        if (!node) return 0;
        return 1 + this.total(node.left) + this.total(node.right);
    }
    // Height of the Tree:

    height(node = this.root) { //iterative height
        if (!node) return;
        let maxCount = 0
        let count = 1;
        
        const stack = [[node, count]];

        while (stack.length > 0) {
            node = stack.pop();
            count = node[1];
            if (node[0].left) stack.push([node[0].left, count++]);
            if (node[0].right) stack.push([node[0].right, count++]);
            if (count > maxCount) maxCount = count;
        }
        return maxCount;
    }

    recurseHeight(node = this.root) {
        let leftHeight = 0, rightHeight = 0;
        if (!node) return;
        if (node.left) {leftHeight =  this.recurseHeight(node.left);}
        if (node.right) {rightHeight = this.recurseHeight(node.right);}
        return 1 + Math.max(leftHeight, rightHeight);
    }

    // Calculating the height of the tree can be important for balancing operations and for understanding the tree's structure.
    // Balancing the Tree:

    // Finding the in-order successor or predecessor of a given value or node in the BST.
    // Size of the Tree:

    // Calculate the number of nodes in the tree.
    // IsBST Check:

    // A method to verify whether a binary tree is a BST or not, based on BST properties.
    // Print/Display Tree:

}

const newTree = new searchTree();

// newTree.insertWhile(10);
// newTree.insertWhile(5);
// newTree.insertWhile(15);
// newTree.insertWhile(20);
// newTree.insertWhile(1);
// newTree.insertWhile(7);

newTree.insertNew(50);
newTree.insertNew(25);
newTree.insertNew(75);
newTree.insertNew(10);
newTree.insertNew(40);
newTree.insertNew(60);
newTree.insertNew(90);
newTree.insertNew(5);
newTree.insertNew(15);
newTree.insertNew(30);
newTree.insertNew(45);
newTree.insertNew(80);
newTree.insertNew(100);
newTree.insertNew(85);
// newTree.insert(10);
// newTree.insert(5);
// newTree.insert(15);
// newTree.insert(20);
// newTree.insert(1);
// newTree.insert(7);
// newTree.insert(32);
// newTree.insert(2);
// newTree.insert(16);
// newTree.insert(18);
// newTree.insert(9);
// newTree.insert(21);
// newTree.insertNew(32);
// newTree.insertNew(2);
// newTree.insertNew(16);
// newTree.insertNew(18);
// newTree.insertNew(9);
// newTree.insertNew(21);
// console.log(newTree.containsWhile(21));
// console.log(newTree.containsWhile(12));
// console.log(newTree.contains(21));
// console.log(newTree.contains(12));

const treeRoot = newTree.root;
//newTree.preOrder();

//newTree.inOrder();
//newTree.reverse();
// newTree.inOrder();
// newTree.preOrder();
console.log(newTree.minMax());
console.log(newTree.min());
console.log(newTree.max());
console.log(newTree.total());
console.log('max height: ', newTree.height());
console.log('max recurse height: ', newTree.recurseHeight());

//console.log(newTree);