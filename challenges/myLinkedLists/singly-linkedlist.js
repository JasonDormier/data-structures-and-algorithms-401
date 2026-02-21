'use strict';

class Node { //initalization of our node template
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() { //initalize the head node
        this.head = null;
    }

    append(data) { // adding a node with data to the end of the list
        const newNode = new Node(data);
        let current = this.head; // we are starting on this.head
        if (!this.head) {// if there is no head we are going to create one
            this.head = newNode;
            return;
        }

        while (current.next) {//loop until the next node is null
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(data) {
        let newNode = new Node(data);
        if (!this.head) { //check if the head exists if not create a head node
            this.head = newNode;
        }
        newNode.next = this.head; // before we can prepend the list we assign the current head to a new Node after the head
        this.head = newNode; // the new head is our prepended data
    }

    insertAfter(data, newData){
        let current = this.head;
        const newNode = new Node(newData);

        while (current !== null && current.data !== data ){ //current is not null and current.data do not equal or data we are looking for keep traversing
            current = current.next;
        }

        if (current){ // make sure the loop stopped because we found the value we wanted and not because we hit null
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    insertBefore(data, newData){
        let current = this.head;
        const newNode = new Node(newData);

        while (current.next !== null & current.next.data !== data){ //loop until we find the value we want to insert before and then stop
            current = current.next;
        }

        if (current.next){
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    includes(data) {
        let current = this.head;
        while (current !== null && current.data !== data){
            current = current.next;
        }

        if (current){
            console.log('true');
            return true;
        } 
        else {
            console.log('false');
            return false;
        }
    }

    nFromEnd (n){
        let p1 = this.head;
        let p2 = this.head;
        let counter = 0;

        if(!this.head){
            console.log('nothing in the list');
            return null;
        }

        while(p2.next) {
            //console.log('counter: ', counter);
            if (counter < n){
                p2 = p2.next;
                counter++;//move p2 n places from p1
            }else{ //now move both pointers until p2.next is null.
                p2 = p2.next;
                p1 = p1.next;
            }
        }
        return !p2.next && counter < n ? console.log('list not long enough') : console.log(p1.data, ' is ', n, ' from the end'); 
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const testList = new SinglyLinkedList();

testList.head = new Node(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.append(5);
testList.append(6);
//testList.printList();
testList.prepend(0);
//testList.printList();
testList.insertAfter(3,4);
testList.insertBefore(6, 12);
testList.printList();
testList.includes(4);
testList.includes(9);
testList.nFromEnd(5);
testList.nFromEnd(10);
// testList.printList();

const testList2 = new SinglyLinkedList();
testList2.nFromEnd(2);

