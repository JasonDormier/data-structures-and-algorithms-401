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
    console.log(insertNode.head.value);
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
});