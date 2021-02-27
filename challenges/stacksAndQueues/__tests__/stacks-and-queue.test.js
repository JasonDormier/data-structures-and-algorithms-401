'use strict';
'use strict';

const stackAndQueue = require('../stacks-and-queues.js');

describe('testing the funciton of the stacks and queue function', () => {
  it('can successfully push onto a stack', () => {

    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');

    stack.push(nodeA);
    stack.push(nodeB);

    let test = stack.pop();

    expect(test).toEqual('second');
  });
  it('can successfully push multiple values onto a stack', () => {

    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    expect(stack.top.value).toEqual('third');
    expect(stack.top.next.value).toEqual('second');

  });
  it('can successfully pop off the stack', () => {

    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();

    expect(test).toEqual('third');
  });
  it('can successfully empty a stack after multiple pops', () => {

    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();
    let test1 = stack.pop();
    let test2 = stack.pop();

    expect(test).toEqual('third');
    expect(test1).toEqual('second');
    expect(test2).toEqual('first');
    expect(stack.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {

    let stack = new stackAndQueue.stack();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.peek(nodeA);

    expect(test).toEqual('third');
  });

  it('Can successfully instantiate an empty stack', () => {

    let stack = new stackAndQueue.stack();

    expect(stack.top).toEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception', () => {

    let stack = new stackAndQueue.stack();

    let test = stack.peek();
    expect(test).toEqual('no node in stack');
  });

  it('Can successfully enqueue into a queue', () => {

    let queue = new stackAndQueue.queue();

    expect(queue).toBeTruthy();
  });

  it('Can successfully enqueue into a queue', () => {

    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    expect(queue.front.value).toEqual('first');
  });
  it('Can successfully enqueue multiple values into a queue', () => {

    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    expect(queue.front.value).toEqual('first');
    expect(queue.front.next.value).toEqual('second');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {

    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    let test = queue.dequeue();

    expect(test).toEqual('first');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {

    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    let test = queue.peek();

    expect(test).toEqual('first');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toEqual(null);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    let queue = new stackAndQueue.queue();
    let nodeA = new stackAndQueue.node('first');
    let nodeB = new stackAndQueue.node('second');
    let nodeC = new stackAndQueue.node('third');

    queue.enqueue(nodeA);
    queue.enqueue(nodeB);
    queue.enqueue(nodeC);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toEqual(null);
  });
  it('Can successfully enqueue into a queue', () => {

    let queue = new stackAndQueue.queue();

    expect(queue.front).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {

    let queue = new stackAndQueue.queue();
    let test = queue.peek();

    expect(test).toEqual('no node in queue');
  });
});



// Calling dequeue or peek on empty queue raises exception