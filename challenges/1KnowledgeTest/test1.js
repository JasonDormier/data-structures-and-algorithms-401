'use strict';

// JavaScript Fundamentals: Questions or exercises to assess understanding of variables, loops, conditionals, functions, and scope.
        //you should have asked specific quetions. To bad +1 point for me.
// Data Structures Implementation and Usage:
// Implement a singly linked list with basic operations (insert, delete, search).
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor () {
        this.head = null;
    }
    //insert
    insert(findVal, value) {
        const newNode = new Node(value);
        current = this.head;

        if(!this.head) {
            this.head = newNode;
        }

        while(current.value !== findVal) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    //search
    search(findVal) {
        let current = this.head;
        while(current.value !== findVal) {
            current = current.next;
        }
        return current;
    }

    //delete
    delete(delVal) {
        const current = this.head;
        if(this.head.val === delVal) {
            this.head = this.head.next;
        }
        while(current.next.value !== delVal) {
            current = current.next;
        }
        if(!current.next.next){
            current.next = null;
        } else {
            current.next = current.next.next;
        }
    }
}

// Implement a stack and a queue using both arrays and linked lists.
    //I will do one stack as a node and queue as an array not both
class StackNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    //push
    push(value) {
        const newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    //pop
    pop() {
        const popped = this.top;
        this.top = this.top.next;
        return popped;
    }
    //peak
    peak() {
        return this.top.value;
    }
}

class Queue {
    constructor(){
        this.queue = []
    }
    //enqueue
    enqueue(value) {
        this.queue.push(value);
    }
    //dequeue
    dequeue() {
        this.queue.pop(value);
    }
    //front
    front() {
        return this.queue[this.queue.length];
    }
}
// Perform operations on arrays and strings, such as reversing a string and merging two sorted arrays.
const reverse = (arr) => {
    const result = [];
    for (let i = arr.length; i > 0; i--){
        result[result.length] = arr[i];
    }
    return result;
}

const sortedArrays = (arr1, arr2) => {
    let length;
    let result = [];

    if(arr1.length > arr2.length) length = arr1.length;
    else length = arr2.length;
    for (let i = 0; i < length; i++){
        if(arr1[i] < arr2[i]){
            if(arr1[i]){
                result[result.length] = arr1[i];
            }
            if(arr2[i]){
                result[result.length] = arr2[i];
            }
        } else {
            if(arr2[i]){
                result[result.length] = arr2[i];
            }
            if(arr1[i]){
                result[result.length] = arr1[i];
            }
        }
    }
    return result;
}

// Sorting Algorithms:

// Write the Bubble Sort algorithm to sort an array of numbers.
const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                const temp = arr[j + 1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            } 
        }
    }
    return arr;
}

// Implement Selection Sort and demonstrate its use on an array of strings.

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minVal = arr[i].charCodeAt(0);
        let minValChar = arr[i];
        let index = i;
        for (let j = i; j < arr.length; j++) {
            console.log(arr[j].charCodeAt(0));
            if(minVal > arr[j].charCodeAt(0)){
                minVal = arr[j].charCodeAt(0);
                minValChar = arr[j]
                index = j;
            }
            if (minVal !== arr[i].charCodeAt(0)) {
                let temp = arr[i]
                arr[i] = minValChar;
                arr[index] = temp;
            }
        }
    }
    return arr;
}

const arr = ['b', 'z', 'a', 'f', 'e', 'c']
console.log(selectionSort(arr));

// Code the Insertion Sort algorithm and explain its time complexity.
// Implement Merge Sort and sort an array of objects based on a specific property.

const mergeSort = (arr) => {

    if(arr.length > 1){
        let mid = arr.length/2;
        const left = [], right = [];

        for (let i = 0; i < arr.length; i++){
            if(i < mid){
                left[left.length] = arr[i];
            }else{
                right[right.length] = arr[i];
            }
        }
        mergeSort(left);
        mergeSort(right);
        merge(left, right, arr);
    }
   return arr;
}

function merge(left, right, arr) {
    let i = 0, l = 0, r = 0;
    while(l < left.length && r < right.length) {
        if (left[l] < right[r]){
            arr[i] = left[l];
            l++;
            i++
        } else {
            arr[i] = right[r];
            r++;
            i++;
        }
    }

    while(l < left.length) {
        arr[i] = left[l];
        l++;
        i++;
    }

    while(r < right.length){
        arr[i] = right[r];
        r++;
        i++;
    }
}

// Basic Search Methods:

// Perform a linear search on an unsorted array.
const linearSeach = (arr, findVal) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === findVal) return 'Found, the index is: ', i;
    }
}
// Implement binary search on a sorted array and explain its time complexity.
    //binary search is the next two weeks we please keep track of our conversation.