'use strict'

//create a Seperate chaining Hash Table then create a open addressing Hash Table using double hash

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
        }

        let current = this.head;
        while(current) {
            current = current.next;
        }
        current = newNode;
    }

    get(key) {
        let current = this.head;

        while (current) {
            if(current.key === key) {
                return [current.key, current.value];
                //return {key: current.key, value : current.value }
            }
            current = current.next;
        }   
        return undefined; 
    }
}

class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
    }

    _hash(key) {
      let total = 0;
      const Prime = 31;
  
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * Prime + value) % this.buckets.length;
      }
      return total;
    }

    _hashWithReduce(key) {
      const Prime = 31;
      return Array.from(key).reduce((total, char) => {
        let value = char.charCodeAt(0) - 96;
        return (total * Prime + value) % this.buckets.length;
      }, 0)
    }
  
    set(key, value) {
      const i = this._hash(key);
      if(!this.buckets[i]) {
        this.buckets[i] = new LinkedList();
      }
      this.buckets[i].insert(key, value);
    }
  
    get(key) {
      const i = this._hash(key);
      if (this.buckets[i]){
        return this.buckets[i].get(key);
      }
      return undefined;
    }
  }

  const newHash = new HashTable(53);

  newHash.set('hello', 16);
  newHash.set('cheese', 12);
  newHash.set('ab', 1);
  newHash.set('j', 2);
  console.log(newHash.get('ab'));
  console.log(newHash.get('j'));

  class doubleHashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }
    _hash(key) {
        let Prime = 31;
        return Array.from(key).reduce((total, char) => {
            const value = char.charCodeAt(0) - 96;
            return (total * Prime + value) % this.size;
        }, 0);
    }
    
    _doubleHash(key) {
        let Prime = 7;
        return 1 + Array.from(key).reduce((total, char) => {
            const value = char.charCodeAt(0) - 96;
            return (total * Prime + value) % this.size;
        }, 0);
    }

    set(key, value) {
        let i = this._hash(key);
        const step = this._doubleHash(key);
    
        while (this.buckets[i] && this.buckets[i][0] !== key) {
            i = (i + step) % this.size;
        }
        this.buckets[i] = [key, value];
    }

    get(key) {
        let i = this._hash(key);
        const step = this._doubleHash(key);
        let count = 0;

        while (this.buckets[i] && count < this.size) {
            if(this.buckets[i][0] === key) {
                return this.buckets[i];
            }
            i = (i + step) % this.size;
            count++;
        }
        return undefined;
    }
  }

  const newDoubleHT = new doubleHashTable(53);

  newDoubleHT.buckets[10] = ['test', 0];

  newDoubleHT.set('hell', 5);
  newDoubleHT.set('banana', 7);
  newDoubleHT.set('ab', 1);
  newDoubleHT.set('j', 2);
  newDoubleHT.set('j', 3);
  console.log(newDoubleHT.get('banana'));
  console.log(newDoubleHT.get('ab'));
  console.log(newDoubleHT.get('j'));
  //console.log(newDoubleHT.buckets);
  