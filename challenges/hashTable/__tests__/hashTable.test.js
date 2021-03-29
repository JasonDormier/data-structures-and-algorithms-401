'use strict';

let Hashtable = require('../hashTable.js');
let test = new Hashtable(1024);


describe('testing the funciton of a Hashtables', () => {
  it('should add a key/value to your hashtable results in the value being in the data structure', () => {

    test.add('turbo', 'time');
    expect(test.contains('turbo')).toEqual(true);

  });

  it('should retrieve based on a key returns the value stored', () => {
    expect(test.get('turbo')).toStrictEqual('time');
  });

  it('should successfully returns null for a key that does not exist in the hashtable', () => {
    expect(test.contains('nuts')).toStrictEqual(false);
  });

  it('should successfully handle a collision within the hashtable', () => {

    expect(test.add('obrut', 'Nope')).toStrictEqual(undefined);
  });

  it('should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(test.get('turbo')).toEqual('time');
  });

  it('should successfully hash a key to an in-range value', () => {
    expect(test.hash('slow')).toBeLessThanOrEqual(1024);
  });

});