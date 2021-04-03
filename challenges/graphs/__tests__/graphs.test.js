'use strict';

const test = require('../graphs.js');

describe('testing the funciton of a graph', () => {
    it('should succesfully add a vertext to the graph.', () => {

        let newGraph = new test.Graph();

        let one = new test.Vertex('one');
        newGraph.addVertex(one);

        const newTest = newGraph.breadthFirst(one);

        expect(newTest.size).toEqual(1);
    });
    it('should succesfully add a edge to the graph.', () => {

        let newGraph = new test.Graph();

        let one = new test.Vertex('one');
        let two = new test.Vertex('two');
        newGraph.addVertex(one);
        newGraph.addVertex(two);
        newGraph.addEdge(one,two);

        const newTest = newGraph.breadthFirst(one);
        console.log(newTest);

        expect(newTest.size).toEqual(1);
    });
    it('should succesfully retrieve all nodes from a graph', () =>{

        expect().toEqual();
    });

    it('should retrieve all the neighbors from the graph', () =>{

        expect().toEqual();
    });

    it('should return the weight of the neighbors in the graph', () =>{

        expect().toEqual();
    });

    it('should return the proper size of the graph', () =>{

        expect().toEqual();
    });

    it('should return a graph with only one node and edge', () =>{

        expect().toEqual();
    });

    it('should return null for an empty graph', () =>{

        expect().toEqual();
    });



});
