'use strict';

// class Vertex {
//     constructor(value) {
//         this.value = value;
//         //this.edges = [];
//     }
// }

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(value) {
        if (!this.adjacencyList.has(value)) {
            this.adjacencyList.set(value, []);
        }
    }

    addEdge(startVertex, endVertex, weight = 0) {

        if (!this.adjacencyList.has(startVertex)) {
          throw new Error('Invalid start vertex');
        }
    
        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));  // adds our edge to the vertex's list of connections.
      }
      
    depthFirstSearch(startVertex) { //iteravtive search
        console.log('=========================')
        const stack = [startVertex];
        while (stack.length > 0) {
            const current = stack.pop();
            console.log('DFS current: ', current);
            const neighbors = this.adjacencyList.get(current);
            for(let neighbor of neighbors) {
                stack.push(neighbor.vertex);
            }
        }
    }
    depthFirstRecurse(startVertex) { //Recursive search
        console.log(startVertex);
        let neighbors = this.adjacencyList.get(startVertex);
        for (let neighbor of neighbors) {
            this.depthFirstRecurse(neighbor.vertex);
        }
    }
    breadthFirstSearch(startVertex) {
        const queue = [startVertex];
        while (queue.length > 0) {
            const current = queue.pop();
            console.log('BFS current: ', current);
            const neighbors = this.adjacencyList.get(current);
            for (let neighbor of neighbors) {
                queue.unshift(neighbor.vertex);
            }
        }
    }
}
const depthFirst = (graph, startVertex) => {
    const stack = [startVertex];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        let neighbors = graph.adjacencyList.get(current);
        for(let neighbor of neighbors) {
            console.log(neighbor);
            stack.push(neighbor.vertex);
        }
    }
}

const myGraph = new Graph();

myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');
myGraph.addVertex('G');
myGraph.addVertex('H');
myGraph.addVertex('I');
myGraph.addEdge('A', 'D', 1);
myGraph.addEdge('A', 'B', 1);
myGraph.addEdge('B', 'C', 1);
myGraph.addEdge('C', 'I', 1);
myGraph.addEdge('D', 'E', 1);
myGraph.addEdge('E', 'G', 1);
myGraph.addEdge('G', 'H', 1);
myGraph.addEdge('E', 'F', 1);
//console.log(myGraph);
myGraph.depthFirstRecurse('A');
myGraph.depthFirstSearch('A');
// myGraph.breadthFirstSearch('A');
// depthFirst(myGraph, 'A');


//functional DFS and BFS

// function bfsearch(graph, start) {

//     const queue = [start];
//     const visited = [];

//     console.log(queue.length)
//     while (queue.length > 0) {
//         const current = queue.shift();
//         visited.push(current);

//         const neighbors = graph.adjacencyList.get(current);
//         //of is for arrays, in is for objects. of doesn't need a key val pair, in does since you are looping an object
//         for (let neighbor of neighbors) {
//             queue.push(neighbor.vertex);
//         }
//     }
//     return visited;
// }

// function dfsearch(graph, start) {
//     const stack = [start];
//     const visited = [];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         visited.push(current);

//         const neighbors = graph.adjacencyList.get(current);

//         for (let neighbor of neighbors) {
//             stack.push(neighbor.vertex);
//         }
//     }
//     return visited;
// }

// function recurseDFS(graph) { //using closure to run a recursive dfs search
//     const visited = new Set();
//     function inner (start) {
//         if (visited.has(start)) return;
//         visited.add(start);
//         const neighbors = graph.adjacencyList.get(start) || [];

//         for (let neighbor of neighbors) {
//             inner(neighbor.vertex)
//         }
//         return visited;
//     }
//     return inner;
// }

function bfsearch(graph, start) {
    
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {

        const current = queue.shift();
        visited.add(current);

        const neighbors = graph.adjacencyList.get(current);

        for (let neighbor of neighbors) {
            queue.push(neighbor.vertex);
        }
    }
    return visited;
}

function dfsSearch(graph) {
    const visited = new Set();

    function inner(start) {
        if (visited.has(start)) return;

        visited.add(start);
        const neighbors = graph.adjacencyList.get(start);
        
        for (let neighbor of neighbors) {
            inner(neighbor.vertex);
        }
        return visited;
    }
    return inner;
}



console.log(bfsearch(myGraph, 'A'));
// console.log(dfsearch(myGraph, 'A'));
const runDFS = dfsSearch(myGraph);
console.log('closure DFS: ', runDFS('A'));



// const test = new Set();
// const proto = Object.getPrototypeOf(test);
// console.log(Object.getOwnPropertyNames(proto));