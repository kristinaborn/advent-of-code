class DirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  getVertices() {
    return this.adjacencyList.keys();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(from, to) {
    const list = this.adjacencyList.get(from);
    this.adjacencyList.set(from, [...list, to]);
  }

  depthFirstSearch(initialVertex) {
    const queue = [initialVertex];
    const result = [];
    const visited = {};
    visited[initialVertex] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      if (!this.adjacencyList.has(currentVertex)) continue;

      this.adjacencyList.get(currentVertex).forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

module.exports = DirectedGraph;
