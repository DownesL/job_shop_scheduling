import {dijkstra} from "./dijkstra";
import {bellmanFord} from "./bellmanFord";

export const johnson = (graph) => {
    const tempGraph = graph.clone(); // Operate on a clone of the graph to be side-effect-free.

    tempGraph.addNeighbourList("0", graph.getNode("1a").concat(graph.getNode("2a")));
    tempGraph.nodes.forEach(node => node.addNodeToAll(node, 0));

    const bfDistance = bellmanFord(tempGraph, "" + 0);

    tempGraph.nodes.forEach((neighbours, nodeID) => {

        const fromDist = bfDistance.get(nodeID);

        neighbours.forEach((node = {id: "1a", weight: 1}, index) => {
            neighbours[index] = {
                id: node.id,
                weight: node.weight + fromDist - bfDistance.get(node.id)
            };
        });
    });

    const distance = new Map();

    tempGraph.nodes.forEach((neighbours, nodeID) => {
        const fromDist = bfDistance.get(nodeID);
        const tempDistance = dijkstra(tempGraph, nodeID);

        tempDistance.forEach((distance, nodeID) => {
            tempDistance.set(
                nodeID,
                distance - fromDist + bfDistance.get(nodeID)
            );
        });
        distance.set(nodeID, tempDistance);
    });

    return distance;
}