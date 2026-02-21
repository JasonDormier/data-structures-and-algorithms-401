'use stirct';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class doublyCircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.next = this.head;
            this.previous = this.tail;
        }
        newNode.previous = this.tail; //assign the newNodes previous
        newNode.next = this.head; //assign the newNodes next
        this.tail.next = newNode; //assign the current tail next to newNode
        this.head.previous = newNode; // assign the previous of the current head to the new node;
        this.tail = newNode; //drop new node in place as the new tail
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.next = this.head;
            this.previous = this.tail;
        }
        newNode.next = this.head;// assign the next value for the newNode
        newNode.previous = this.tail;//assign the previous value of the newNode
        this.head.previous = newNode;//assign the new previous value of the current head
        this.tail.next = newNode;
        this.head = newNode;//drop the newNode into place as the new head
    }

    traverseForward(passes) {
        let current = this.head;
        let counter = 0;
        while (counter < passes) {
            console.log(current.value);
            if (current === this.tail) {
                console.log('counter: ', counter);
                counter++;
            }
            current = current.next;
        }
    }

    traverseBackward(passes) {
        let current = this.tail;
        let counter = 0;
        while (counter < passes) {
            console.log(current.value);
            if (current === this.head) {
                console.log('counter: ', counter);
                counter++;
            }
            current = current.previous;
        }
    }

    traverseForwardandBack() {
        let current = this.head;
        let tracker = 0;
        while (tracker !== 3) {
            console.log(current.value);
            if (current === this.head || current === this.tail) {
                tracker++;
            }
            if (tracker === 1) {
                current = current.next;
            } else {
                current = current.previous;
            }
        }
    }

    //insertBefore
    insertBefore(findVal, value) { //we are assigning the value for current.next
        const newNode = new Node(value);
        let current = this.head;

        if (findVal === this.head.value) {
            newNode.next = this.head;
            newNode.previous = this.tail;
            this.head.previous = newNode;
            this.tail.next = newNode;
            this.head = newNode;
            return;
        }

        while (current.next.value !== findVal && current.next !== this.head) {//current.next is not this.head so we can check the tail value
            current = current.next;
        }

        if (current.next.value === findVal) {
            newNode.next = current.next;
            newNode.previous = current;
            current.next.previous = newNode;
            current.next = newNode;
            current = newNode;
        } else {
            console.log('Could not find that value');
            return;
        }
    }

    //insertAfter
    insertAfter(findVal, value) {
        const newNode = new Node(value);
        let current = this.head;

        if (findVal === this.tail.value) {
            newNode.next = this.head;
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.head.previous = newNode;
            this.tail = newNode;
            return;
        }

        while (current.value !== findVal && current.next !== this.head) {
            current = current.next;
        }

        if (current.value === findVal) {
            newNode.next = current.next;
            newNode.previous = current;
            current.next.previous = newNode;
            current.next = newNode;
            current = newNode;
        } else {
            console.log('Could not find that value');
            return;
        }
    }

    //delete
    delete(value) {
        let p1 = this.head;
        let p2 = this.tail;

        if (!this.head) {
            console.log('There is nothing in the list');
            return;
        }

        if (this.head.value === value) {
            this.head.next.previous = this.tail;
            this.tail.next = this.head.next;
            this.head = this.head.next;
            return;
        }

        if (this.tail.value === value) {
            this.tail.previous.next = this.head;
            this.head.previous = this.tail.previous;
            this.tail = this.tail.previous;
            return;
        }

        while (p1.next.value !== value && p2.previous.value !== value && p1 !== p2) {
            p1 = p1.next;
            p2 = p2.previous;
        }

        if (p1.next.value === value) {
            console.log('p1 found the value')
            p1.next.next.previous = p1;
            p1.next = p1.next.next;

        } else if (p2.previous.value === value) {
            console.log('p2 found the value');
            p2.previous = p2.previous.previous;
            p2.previous.previous.next = p2;

        } else {
            console.log('Could not find that value');
        }
    }
    // for insert before and insert after we could write a search that uses two pointers, one from the head and one from the tail which should cut the search time in half.
}


const dcll = new doublyCircularLinkedList();

dcll.append(5);
dcll.append(6);
dcll.append(7);
dcll.append(8);
dcll.prepend(4);
dcll.prepend(3);
dcll.prepend(2);
dcll.prepend(1);

dcll.insertBefore(7, 77);
dcll.insertBefore(1, 0);

dcll.insertAfter(8, 9);
dcll.insertAfter(1, 22);

//dcll.traverseForward(2);
dcll.traverseBackward(2);

dcll.delete(22);
dcll.delete(77);
dcll.delete(0);
dcll.delete(9);
dcll.traverseForward(2);
dcll.traverseBackward(2);
//dcll.traverseForwardandBack();


//console.log(dcll);