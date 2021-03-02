'use strict';

const shelter = require('../fifo-animal-shelter.js');

const cat = new shelter.animal('cat');
const dog = new shelter.animal('dog');
const turtle = new shelter.animal('turtle');


describe('Testing the animal shelter', () => {
  const animalShelter = new shelter.animalShelter();

  animalShelter.enqueue(dog);
  animalShelter.enqueue(cat);
  animalShelter.enqueue(cat);
  animalShelter.enqueue(turtle);

  it('Should only allow cats and dogs into the queue', () => {

    expect(animalShelter.enqueue(turtle)).toEqual('turtle is not a cat or dog');
  });
  it('Should dequeue a dog', () => {

    expect(animalShelter.dequeue('dog')).toEqual('dog');
  });
  it('Should dequeue a cat', () => {

    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });
});