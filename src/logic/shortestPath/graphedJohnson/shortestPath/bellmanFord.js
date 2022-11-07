export const bellmanFord = (graph, start) => {
    const distance = new Map();
    const nodeAmount = graph.nodes.length;
    const dist = Array(nodeAmount);
    const indexOffsetB = (nodeAmount-1)/2 - 1;

    graph.nodes.forEach((neighbours, nodeID) => dist.push(nodeID, Infinity));
    dist[nodeAmount - 1] = 0;
    // graph.nodes.forEach((node,nodeID) => distance.set(nodeID, 100));
    // distance.set(start, 0);

    // for(let i = 0; i < graph.nodes.length; i++) {
    //     let foundShorterDistance = false;
    //
    //     graph.nodes.forEach((neighbours, nodeID) => {
    //         const nodeDist = distance.get(nodeID);
    //
    //         neighbours.forEach((node = {id: "1a", weight: 1}) => {
    //             const newDist = nodeDist + node.weight;
    //
    //             if(distance.get(node.id) <= newDist)
    //                 return;
    //
    //             distance.set(node.id, newDist);
    //             foundShorterDistance = true;
    //         });
    //     });
    //
    //     if(!foundShorterDistance)
    //         break;
    //
    //     if(i === graph.nodes.length - 1)
    //         throw new Error("The given graph contains a negative edge cycle.");
    // }

    return distance;
}