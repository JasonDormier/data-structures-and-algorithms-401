# Challenge Summary
* Graphs

## Challenge Description
* Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

1. `AddVertex()`

    * Adds a new node to the graph

    * Takes in the value of that node

    * Returns the added node

    * Space: O(1), Time: O(1)

1. `AddEdge()`

    * Adds a new edge between two nodes in the graph

    * Include the ability to have a “weight”

    * Takes in the two nodes to be connected by the edge

    * Both nodes should already be in the Graph

    * Space: O(1), Time: O(1)

1. `GetNodes()`

    * Returns all of the nodes in the graph as a collection (set, list, or similar)

    * Space: O(n), Time: O(|V| + |E|)

1. `GetNeighbors()`

    * Returns a collection of edges connected to the given node

    * Takes in a given node

    * Include the weight of the connection in the returned collection

    * Space: O(n), Time: O(n)

1. `Size()`

    * Returns the total number of nodes in the graph

    * Space: O(n), Time: O(|V| + |E|)

1. Breadth Traversal

  * Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

1. Find Edges
* Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

1. Depth First
* Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.


## Approach & Efficiency
- Space: O(1), Time: O(1) (most things in hashtable are only limited by the linked list or array used as each bucket)

## Collaborators

- Carly Dekock

- Jason Dormier

- Nick Magruder

- Seid Mohamed

- Bill Moreno

## Resources

- [Codefellows Docs](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)