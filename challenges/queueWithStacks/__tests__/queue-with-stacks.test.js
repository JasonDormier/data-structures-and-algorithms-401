'use strict';

const likeQueue = require('../queue-with-stacks.js');

describe('testing Pseudo Queue operation', () => {

  const pseudoQueue = new likeQueue.pseudoqueue();

  const nodeA = new likeQueue.node(20);
  const nodeB = new likeQueue.node(15);
  const nodeC = new likeQueue.node(10);
  const nodeD = new likeQueue.node(5);


  pseudoQueue.enqueue(nodeA);
  pseudoQueue.enqueue(nodeB);
  pseudoQueue.enqueue(nodeC);
  pseudoQueue.enqueue(nodeD);

  it('should start with 3 numbers and add a 4th number to the pseudo code', () => {
    expect(pseudoQueue.rear.top.value).toEqual(5);

  });

  it('should dequeue the next value', () => {

    pseudoQueue.dequeue();

    expect(pseudoQueue.dequeue().value).toEqual(15);
  });
});