'use strict';

function Animal(type) {
  this.type = type;
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    if (animal.type === 'dog' || animal.type === 'cat') {
      if (this.isEmpty()) {

        this.front = animal;
        this.rear = animal;

      } else {
        this.rear.next = animal;
        this.rear = animal;
      }
    } else {
      return `${animal.type} is not a cat or dog`;
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      let temp = this.front;

      this.front = temp.next;
      temp.next = null;

      return temp.type;
    }
    else if (pref === 'cat') {
      let temp = this.front;

      this.front = temp.next;
      temp.next = null;

      return temp.type;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  'animalShelter': AnimalShelter,
  'animal': Animal,
};
