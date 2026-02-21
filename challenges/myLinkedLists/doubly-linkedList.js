'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    traverseForward() {
        let current = this.head;

        while (current){
            console.log(current.data);
            current = current.next;
        }
    }
    
    traverseBackward() {
        let current = this.tail;
        while (current){
            console.log(current.data);
            current = current.previous;
        }
    }

    prepend(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head; //assign the old head to the next node
        this.head = newNode; //assign the head pointer to the new head
        this.head.next.previous = this.head; // assign new next.previous to point back at the new head
    }

    appendFromFront(data){
        const newNode = new Node(data);
        let current = this.head;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
        newNode.previous = current;
        this.tail = newNode;
    }
    
    appendFromTail(data){
        const newNode = new Node(data);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode; //assign current tail to the newNode
        newNode.previous = this.tail;//assign the newNode its previous to current tail
        this.tail = newNode; //assign the tail to the newNode
    }
}

const dll = new doublyLinkedList();


dll.head = new Node(1);
dll.head.next = new Node(2);
dll.head.next.previous = dll.head;

dll.head.next.next = new Node(3);
dll.head.next.next.previous = dll.head.next;

dll.head.next.next.next = new Node(4);
dll.head.next.next.next.previous = dll.head.next.next;

dll.head.next.next.next.next = new Node(5);
dll.head.next.next.next.next.previous = dll.head.next.next.next;

dll.head.next.next.next.next.next = new Node(6);
dll.head.next.next.next.next.next.previous = dll.head.next.next.next.next;

dll.tail = dll.head.next.next.next.next.next;

dll.prepend('New Head');

dll.appendFromFront('old Tail from Front');
dll.appendFromTail('New Tail');

dll.traverseForward();

dll.traverseBackward();

const dll2 = new doublyLinkedList();

dll2.appendFromTail('New Head Second list');

dll2.traverseForward();



