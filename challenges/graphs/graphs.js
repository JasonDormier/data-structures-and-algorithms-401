'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map(); // key = some vertex / value = some edge
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []); // this array will be filled with edges.
  }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));  // adds our edge to the vertex's list of connections.
  }

  // helper function to help with traversals
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('no neighbors for that vertex');
    }

    return [...this.adjacencyList.get(vertex)]; // spread into new array to avoid mutation.
  }

  breadthFirst(vertex) {

    const queue = []; // order of visited node will be FiFo
    const visited = new Set(); // track any visited vertices

    queue.unshift(vertex);
    visited.add(vertex);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex); // gives us an array of neighbors;

      for (let neighbor of neighbors) { // each neighbor is an edge

        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) { // if we have already visited skip 
          continue;
        } else { // if not add to visited list, and queue it up
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited;
  }

  depthFirst(vertex) {

    // const stack = [];
    const visitedVertices = new Set();

    // stack.push(vertex);
    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

      visited.add(current);

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };

    traverse(vertex, visitedVertices);
    return visitedVertices;
  }

  size(vertex) {
    const size = this.depthFirst(vertex);
    return size.size;
  }
}



function getEdge(graph, array) {
  //let money = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log('for loop: ', graph.getNeighbors(array[i]));
    let current = graph.getNeighbors(array[i]);
    let weight = graph.getNeighbors(array[i]);
    // console.log('current: ', [i], weight[0].weight);

    let holder = [];
    current.forEach(value => {
      holder.push(value.vertex.value);
      //console.log('inside map: ', value.vertex.value);
    });
    //console.log('holder: ', holder);
    if (array[i + 1] === undefined) {
      continue;
    } else {
      const neighbor = array[i + 1].value;

      console.log('weight: ', weight);
      if (holder.includes(neighbor)) {
        //console.log('weight: ', array[i + 1]);
        //money += neighbor.weight;

        //console.log(true);
        return true;
      } else {
        //console.log(false);
        return false;
      }
    }
  }
}


module.exports = {
  Vertex,
  Edge,
  Graph,
  getEdge,
};