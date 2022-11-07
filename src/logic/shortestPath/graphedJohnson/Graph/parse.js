import {Graph} from "./Graph";

export const parseGraph = (jobs = [{index: 0, jobID: 1, a: 2, b: 2}]) => {
    const graph = new Graph();

    graph.sizeDeclared = false;

    //DECLARATION OF THE GRAPH NODES
    for(let i = 1; i <= jobs.length; i++) {
        graph.addNode(i + "a");
        graph.addNode(i + "b");
    }
    //ASSIGNMENT OF ALL THE NODES
    jobs.forEach(parseEdge(graph))

    return graph;
};

const parseEdge = graph => job => {
        const [jobID, weightA, weightB] = [job.jobID, job.a, job.b];
        graph.addNodeToAll({id: jobID+"a", weight: weightA})
        graph.addNodeToAll({id: jobID+"b", weight: weightB})
};