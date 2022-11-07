export class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(jobIndex) {
        this.nodes.set(jobIndex, []);
        return {id: jobIndex, weight: 0};
    }

    getNode(id) {
        return this.nodes.get(id);
    }
    getNodes() {
        return this.nodes;
    }
    addNodeToAll(newNode = {id: "1a", weight: 1}) {
        this.nodes.forEach((neighbours, nodeId) => {
            if (nodeId.charAt(0) === newNode.id.charAt(0)) return;
            neighbours.push(newNode);
        })
    }
    addNeighbourList(nodeID = "1a", newNodeList = [{id: "1a", weight: 1}]) {
        let temp = [];
        newNodeList.forEach((value) => {
            if(temp.indexOf(value)<0) temp.push(value)
        })
        this.nodes.set(nodeID, newNodeList);
    }

    clone() {
        const clone = new Graph();

        for(let i = 0; i < this.nodes.length; i++) {
            clone.addNode(i+"a");
            clone.addNode(i+"b");
        }


        this.nodes.forEach((neighbours = [{id: "1a", weight: 1}], nodeID = "1a") => {
            clone.addNeighbourList(nodeID, neighbours)
        });

        return clone;
    }
}
