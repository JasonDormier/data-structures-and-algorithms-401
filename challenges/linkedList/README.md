# data-structures-and-algorithms-401
Code challenges for 401

# Linked List
  * create and travese a linked lists

## Challenge 01
  * Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  * Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  * Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
  `{ a } -> { b } -> { c } -> NULL`
  * .append(value) which adds a new node with the given value to the end of the list
  * .insertBefore(value, newVal) which add a new node with the given newValue         immediately before the first value node
  * .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
 * `includes()` O(N) - `insert()` is O(1) - `toString()` is O(N) - `append()` is O(N) - `inserBefore()` is O(1) - `insertAfter()` is O(N) - `kfromTheEnd()` is O(1)
 * first get familair with the testing environment 
 * made sure everything was setup properly by consoling logging
 * work through each method one at a time.

## Reference
* stackoverflow.com

 ## Collaborators 
 * Carly Dekock
 * Jason Quaglia
 * Seid
 * Nick Macgruder