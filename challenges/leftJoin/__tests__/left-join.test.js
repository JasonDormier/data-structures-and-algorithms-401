'use strict';

const Hashtable = require('../../hashTable/hashTable.js');
const leftJoin = require('../left-join.js');

let hTOne = new Hashtable(50);
let hTTwo = new Hashtable(50);
let hTThree = new Hashtable(50);

hTOne.add('fond', 'enamored');
hTOne.add('wrath', 'anger');
hTOne.add('diligent', 'employed');
hTOne.add('outfit', 'garb');
hTOne.add('guide', 'usher');

hTTwo.add('fond', 'averse');
hTTwo.add('wrath', 'delight');
hTTwo.add('diligent', 'idle');
hTTwo.add('guide', 'follow');
hTTwo.add('flow', 'jam');

hTThree.add('puppy', 'averse');
hTThree.add('kitten', 'delight');
hTThree.add('colt', 'idle');
hTThree.add('fawn', 'follow');
hTThree.add('bunny', 'jam');


describe('Tests the leftJoin function', () => {
  test('when two tables of the same length are compared with some matching keys it should return all the keys from the first HT with the value from HT1 and any relevant values from HT2, if there is not a relevant value for the key the word null will return', () => {
    expect(leftJoin(hTOne, hTTwo)).toStrictEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });
  test('When the same hash table is passed in twice all the keys should be returned with 2 values', () => {
    expect(leftJoin(hTOne, hTOne)).toStrictEqual([
      ['wrath', 'anger', 'anger'],
      ['diligent', 'employed', 'employed'],
      ['guide', 'usher', 'usher'],
      ['fond', 'enamored', 'enamored'],
      ['outfit', 'garb', 'garb'],
    ]);
  });
  test('When 2 tables with no matching keys are compared we will get a return array with null as the third element in every array within the return array', () => {
    expect(leftJoin(hTOne, hTThree)).toStrictEqual([
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['guide', 'usher', null],
      ['fond', 'enamored', null],
      ['outfit', 'garb', null],
    ]);
  });
});