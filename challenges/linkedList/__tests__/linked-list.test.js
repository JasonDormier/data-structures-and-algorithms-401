
'use strict';

const linkedList = require('../linked-list.js');

describe('testing the funciton of a linked node list', () => {
  it('should successfully instantiate an empty list', () => {

    const emptyNode = new linkedList.ll();

    expect(emptyNode).toEqual({ 'head': null });
  });
  it('should properly insert into the head of a linked list', () => {

    let insertNode = new linkedList.ll();
    insertNode.insert('fish');
    insertNode.insert('fish2');

    expect(insertNode.head.value).toEqual('fish2');
  });

  it('should properly point to the first node in the linked list as the head', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(0);

    expect(includeTest.head.value === 0).toBeTruthy();
  });

  it('should properly insert multiple nodes to the first in the linked list', () => {

    let insertNode = new linkedList.ll();
    for (let i = 1; i <= 3; i++) {
      insertNode.insert(`test${[i]}`);
    }

    expect(insertNode.head.next.next.value).toEqual('test1');
    expect(insertNode.head.next.value).toEqual('test2');
    expect(insertNode.head.value).toEqual('test3');
  });

  it('should return a bool of true result', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node('fish');
    includeTest.head.next = new linkedList.node('taco');
    includeTest.head.next.next = new linkedList.node('nugget');
    includeTest.head.next.next.next = new linkedList.node('french fries');

    const test = includeTest.includes('taco');
    const test2 = includeTest.includes('nachos');

    expect(test).toEqual(true);
    expect(test2).toEqual(false);

  });

  it('should return a string respresenting all the values in the linked list', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node('fish');
    includeTest.head.next = new linkedList.node('taco');
    includeTest.head.next.next = new linkedList.node('nugget');
    includeTest.head.next.next.next = new linkedList.node('french fries');
    includeTest.insert('Tall glass of Gin');

    const test = includeTest.toString();

    expect(test).toEqual('{Tall glass of Gin} --> {fish} --> {taco} --> {nugget} --> {french fries} --> {null}');
  });

  it('should append a new node with value to the end of the linked list', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node('tuna');
    includeTest.append('sandwich');

    expect(includeTest.head.next.value).toEqual('sandwich');
  });

  it('should append a new node with value to the end of the linked list', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node('tuna');
    includeTest.append('sandwich');
    includeTest.append('taco sandwich');

    expect(includeTest.head.next.value).toEqual('sandwich');
    expect(includeTest.head.next.next.value).toEqual('taco sandwich');
  });

  it('should add a new nde with the given new value immediately before teh first value node', () => {
    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(0);
    includeTest.head.next = new linkedList.node(1);
    includeTest.insertBefore(1, 4);

    expect(includeTest.head.next.value).toEqual(4);

  });

  it('should add a new node with the given new value immmediately before the first node', () => {
    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(0);
    includeTest.head.next = new linkedList.node(1);
    includeTest.insertBefore(0, 4);

    expect(includeTest.head.value).toEqual(4);
  });

  it('should add a new node with the given value after the first value node', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(0);
    includeTest.head.next = new linkedList.node(1);
    includeTest.head.next.next = new linkedList.node(2);

    includeTest.insertAfter(1, 4);

    expect(includeTest.head.next.next.value).toEqual(4);
  });

  it('should add a new node with the given value after the final value node', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(0);
    includeTest.head.next = new linkedList.node(1);
    includeTest.insertAfter(1, 4);

    expect(includeTest.head.next.next.value).toEqual(4);
  });
  it('should show k is greater than the length of the linked list', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node('fish');
    includeTest.head.next = new linkedList.node('taco');
    includeTest.head.next.next = new linkedList.node('nugget');
    includeTest.head.next.next.next = new linkedList.node('french fries');
    includeTest.insert('Tall glass of Gin');
    const test = includeTest.kthFromEnd(0);

    expect(test).toEqual(null);
  });

  it('should show k and the length of the list are the same', () => {
    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(1);
    includeTest.head.next = new linkedList.node(2);
    includeTest.head.next.next = new linkedList.node(3);
    includeTest.head.next.next.next = new linkedList.node(4);
    includeTest.insert(5);
    const test = includeTest.kthFromEnd(4);

    expect(test).toEqual(1);
  });

  it('should show k is not a positive integer', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(1);
    includeTest.head.next = new linkedList.node(2);
    includeTest.head.next.next = new linkedList.node(3);
    includeTest.head.next.next.next = new linkedList.node(4);
    includeTest.insert(5);
    const test = includeTest.kthFromEnd(0);

    expect(test).toEqual(null);
  });

  it('should show the linked list is of a size 1', () => {
    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(0);
    const test = includeTest.kthFromEnd(1);
    expect(test).toEqual(0);
  });

  it('Should show a “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {

    const includeTest = new linkedList.ll();
    includeTest.head = new linkedList.node(1);
    includeTest.head.next = new linkedList.node(2);
    includeTest.head.next.next = new linkedList.node(3);
    includeTest.head.next.next.next = new linkedList.node(4);
    includeTest.insert(5);
    const test = includeTest.kthFromEnd(4);

    expect(test).toEqual(1);
  });
});