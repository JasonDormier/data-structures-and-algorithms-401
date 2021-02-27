'use strict';

const linkedList = require('../ll-zip.js');

describe('testing the funciton of the zipped list function', () => {
  it('should successfully zip two linked list together.', () => {

    //const emptyNode = new linkedList.ll();
    const ll = new linkedList.ll();

    ll.head = new linkedList.node(1);
    ll.append(3);
    ll.append(2);

    const llTwo = new linkedList.ll();

    llTwo.head = new linkedList.node(5);
    llTwo.append(9);
    llTwo.append(4);

    const test = linkedList.zip(ll, llTwo);



    expect(test).toEqual('{1} --> {5} --> {3} --> {9} --> {2} --> {4} --> {null}');
  });

  it('should successfully zip two linked list together.', () => {
    const llThree = new linkedList.ll();

    llThree.head = new linkedList.node(1);
    llThree.append(3);

    const llFour = new linkedList.ll();

    llFour.head = new linkedList.node(5);
    llFour.append(9);
    llFour.append(4);

    const test2 = linkedList.zip(llThree, llFour);

    expect(test2).toEqual('{1} --> {5} --> {3} --> {9} --> {4} --> {null}');
  });
  it('should successfully zip two linked list together.', () => {

    const llFive = new linkedList.ll();

    llFive.head = new linkedList.node(1);
    llFive.append(3);
    llFive.append(2);

    const llSix = new linkedList.ll();

    llSix.head = new linkedList.node(5);
    llSix.append(9);

    const test3 = linkedList.zip(llFive, llSix);

    expect(test3).toEqual('{1} --> {5} --> {3} --> {9} --> {2} --> {null}');
  });

});
