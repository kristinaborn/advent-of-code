const fs = require("fs");
const DirectedGraph = require("./src/DirectedGraph");

const rules = fs.readFileSync("./input.txt", "utf-8").split("\n");

function buildGraph(rules) {
  const graph = new DirectedGraph();
  const outerBagRegex = RegExp(/(\w+ \w+) bags contain [0-9]/);
  const innerBagRegex = RegExp(/[0-9] (\w+ \w+) bag/g);

  for (const rule of rules) {
    const outerBagMatch = rule.match(outerBagRegex);
    if (!outerBagMatch) continue;

    const [, outerBag] = outerBagMatch;
    graph.addVertex(outerBag);

    const innerBagMatches = rule.matchAll(innerBagRegex);

    for (const ibm of innerBagMatches) {
      const [, innerBag] = ibm;
      graph.addEdge(outerBag, innerBag);
    }
  }

  return graph;
}

function search(graph) {
  const vertices = graph.getVertices();
  let shinyGoldContainerCount = 0;

  for (const v of vertices) {
    const [outerBag, ...innerBags] = graph.depthFirstSearch(v);

    if (innerBags.includes("shiny gold")) {
      shinyGoldContainerCount++;
    }
  }

  console.log(shinyGoldContainerCount);
}

const graph = buildGraph(rules);
search(graph);
