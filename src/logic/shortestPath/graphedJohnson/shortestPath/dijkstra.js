import {Graph} from "../Graph/Graph";

const PriorityQueue = require("fastpriorityqueue");

// Custom percolateUp implementation, since fastpriorityqueue does not offer one
// that returns the new position of the percolated element.
function percolateUp(queue, i) {
    const myval = queue.array[i];

    while(i > 0) {
        const p = i - 1 >> 1; // eslint-disable-line no-bitwise
        const ap = queue.array[p];

        if(!queue.compare(myval, ap))
            break;

        queue.array[i] = ap;
        i = p;
    }

    queue.array[i] = myval;

    return i;
}

export const dijkstra = (graph, start) => {
    const distance = new Map();
    const marked = new WeakSet();
    // const index = new WeakMap();
    const queue = new PriorityQueue((a, b) => distance.get(a) < distance.get(b));

    graph.nodes.forEach((neighbours, nodeID) => distance.set(nodeID, Infinity));
    distance.set(start, 0);

    queue.heapify([...graph.nodes.keys()]);
    // queue.array.forEach((node, i) => index.set(node, i));

    while(!queue.isEmpty()) {
        const node = queue.poll();
        const nodeDist = distance.get(node);

        marked.add({id: node});

        graph.getNode(node).forEach((node = {id: "1a", weight: 1}) => {
            if(marked.has({id: node.id})) return;

            const newDist = nodeDist + node.weight;

            if (distance.get(node.id) <= newDist) return;

            distance.set(node.id, newDist);
            // index.set(nodeID, percolateUp(queue, index.get(nodeID)))
        })

        // node.neighbors.forEach((weight, neighbor) => {
        //     if(marked.has(neighbor))
        //         return;
        //
        //     const newDist = nodeDist + weight;
        //
        //     if(distance.get(neighbor) <= newDist)
        //         return;
        //
        //     distance.set(neighbor, newDist);
        //     index.set(neighbor, percolateUp(queue, index.get(neighbor)));
        // });
    }

    return distance;
}
