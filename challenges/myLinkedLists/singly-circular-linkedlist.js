'use strict';

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class circularSinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //append
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        }
        this.tail.next = newNode;//assign current tail.next to point to the newNode
        newNode.next = this.head; //assign the newNode.next to point to the head
        this.tail = newNode; //assign the tail to point at the newNode.
    }

    //prepend
    prepend(data){
        const newNode = new Node(data);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    //taverse
    traverse(passes){
        let counter = 0;
        let current = this.head;
        if(!this.head){
            console.log('No nodes to count');
            return;
        }
        while(counter < passes){//this triggers every time we change nodes
            console.log(current.data);
            if(current === this.tail){//we have to count how many times we pass the tail
                counter++;
            }
            current = current.next;
        }
    }

    //list length
    length(){
        let counter = 1;//1 not 0 because we want to know the acutal length
        let current = this.head;
        if(!this.head) return 0;
        while (current !== this.tail){
            counter++;
            current = current.next;
        }
        console.log('The length of the list is: ', counter);
        return counter;
    }

    //insert node before
    insertBefore(findData, data){// we are not changing the current node, We are changing the current.next node. It is important for you to identify this in your head before coding.
        const newNode = new Node(data);
        let current = this.head;

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            return;
        }
        if (findData === this.head.data){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        while (current.next.data !== findData && current.next !== this.tail){
            current = current.next;
        }

        if (current.next.data === findData){
            newNode.next = current.next;
            current.next = newNode;
        } else {
            console.log('data value not found');
            return;
        }
    }
    
    //insert node after
    insertAfter(findData, data){ //we are changing where current is pointing in this method
        const newNode = new Node(data);
        let current = this.head;
        if (findData === this.tail.data){
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        
        while (current.data !== findData && current !== this.tail){
            current = current.next
        }
        
        if (findData === current.data){
            newNode.next = current.next;
            current.next = newNode;
        } else {
            console.log('that value does not exist');
            return;
        }
    }

    //find and replace
    findReplace(findData, data){
        let current = this.head;
        while (findData !== current.data && current !== this.tail){
            current = current.next;
        }
        if (current.data === findData){
            current.data = data;
        } else {
            console.log('That value does not exist');
            return;
        }
    }

    //delete
    delete(findData){
        let current = this.head;
        if(!this.head){
            console.log('The list is empty');
            return;
        }

        if (findData === this.head.data){
            if(this.head === this.tail){// if the head is the only node in the list
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
        }

        while(current.next.data !== findData && current !== this.tail){//loop through the list
            current = current.next;
        }

        if (current.next.data === findData && current.next === this.tail) {//if the current.next data matches and current.next is the tail
            current.next = this.head;
            this.tail = current;
        }

        if(current.next.data === findData){
            current.next = current.next.next;
        } else {
            console.log('Could not find that data to delete');
            return;
        }
    }
}

const csll = new circularSinglyLinkedList();
//csll.insertBefore(1,'This is a head before anything is there');
csll.append(2);
csll.prepend(1);
csll.append(3);
csll.append(4);
csll.insertBefore(1, 'this is the new head');
csll.insertBefore(3,'This is a new Node');
csll.insertAfter(2, 'inserted after 2');
csll.insertAfter(4, 'this should be the new tail');
csll.append(10);
csll.findReplace(4, 5);
csll.findReplace(10, 11);
csll.length();
csll.delete(5);
csll.delete(5);
csll.delete('this is the new head');
csll.delete(11);
csll.length();
csll.traverse(1);
console.log(csll);