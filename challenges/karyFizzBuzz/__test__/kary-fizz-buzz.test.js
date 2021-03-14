'use strict';

const fizzBuzz = require('../kary-fizz-buzz.js');

describe('testing fizzBuzzTree function', () => {
  const tree = new fizzBuzz.tree(3);
  tree.root = new fizzBuzz.node(0, tree.k);
  tree.root.children[0] = new fizzBuzz.node(1, tree.k);
  tree.root.children[1] = new fizzBuzz.node(2, tree.k);
  tree.root.children[2] = new fizzBuzz.node(3, tree.k);
  tree.root.children[0].children[0] = new fizzBuzz.node(4, tree.k);
  tree.root.children[0].children[1] = new fizzBuzz.node(5, tree.k);
  tree.root.children[1].children[0] = new fizzBuzz.node(6, tree.k);
  const fizzBuzzTree = fizzBuzz.fizzBuzz(tree);


  it('should change numbers divisible by 3 to Fizz', () => {
    expect(fizzBuzzTree.root.children[2].value).toEqual('fizz');
  });

  it('should change numbers divisible by 5 to Buzz', () => {
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('buzz');
  });

  it('should change numbers divisible by 3 and 5 to FizzBuzz', () => {
    expect(fizzBuzzTree.root.value).toEqual('fizz buzz');
  });

  it('should change numbers not divisible by 3 or 5 to strings', () => {
    expect(fizzBuzzTree.root.children[1].value).toEqual('2');
  });

  it('should create a new tree and leave the old tree unchanged', () => {
    expect(fizzBuzzTree.root.value).toEqual('fizz buzz');
    expect(fizzBuzzTree.root.children[2].value).toEqual('fizz');
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('buzz');
    expect(fizzBuzzTree.root.children[1].value).toEqual('2');
    expect(tree.root.value).toEqual(0);
    expect(tree.root.children[2].value).toEqual(3);
    expect(tree.root.children[0].children[1].value).toEqual(5);
    expect(tree.root.children[1].value).toEqual(2);
  });
});