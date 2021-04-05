'use strict';

const test = require('../graphs.js');

let graphy = new test.Graph();

let pandora = new test.Vertex('Pandora');
let arendelle = new test.Vertex('Arendelle');
let metroville = new test.Vertex('Metroville');
let monstroplolis = new test.Vertex('Monstroplolis');
let narnia = new test.Vertex('Narnia');
let naboo = new test.Vertex('Naboo');

graphy.addVertex(pandora);
graphy.addVertex(arendelle);
graphy.addVertex(metroville);
graphy.addVertex(monstroplolis);
graphy.addVertex(narnia);
graphy.addVertex(naboo);

graphy.addEdge(pandora, arendelle);
graphy.addEdge(arendelle, metroville);
graphy.addEdge(arendelle, monstroplolis);
graphy.addEdge(metroville, narnia);
graphy.addEdge(narnia, naboo);
graphy.addEdge(monstroplolis, naboo);

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
        newGraph.addEdge(one, two);

        newGraph.breadthFirst(one);
        expect(newGraph.breadthFirst(one).has(two)).toEqual(true);
    });
    it('should succesfully retrieve all nodes from a graph', () => {

        expect().toEqual();
    });

    it('should retrieve all the neighbors from the graph', () => {

        expect().toEqual();
    });

    it('should return the weight of the neighbors in the graph', () => {

        expect().toEqual();
    });

    it('should return the proper size of the graph', () => {

        expect().toEqual();
    });

    it('should return a graph with only one node and edge', () => {

        expect().toEqual();
    });

    it('should return null for an empty graph', () => {

        expect().toEqual();
    });
});

describe('testing the breadth traversal method', () => {
    it('should succesfully log each location to the graph.', () => {

        expect(graphy.breadthFirst(pandora).has(arendelle)).toEqual(true);

    });
    it('should succesfully log each location to the graph.', () => {
        expect(graphy.breadthFirst(pandora).has(metroville)).toEqual(true);

    });
    it('should succesfully log each location to the graph.', () => {
        expect(graphy.breadthFirst(pandora).has(naboo)).toEqual(true);
    });

});
