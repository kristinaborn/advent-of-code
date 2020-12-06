const fs = require("fs");
const TobogganTrajectory = require("./src/TobogganTrajectory");

const hill = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((s) => s.trimEnd());

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const treeCounts = slopes.map((slope) => {
  const tobogganTrajectory = new TobogganTrajectory(hill, slope);
  tobogganTrajectory.countTrees();
  return tobogganTrajectory.treeCount;
});

const product = (a, b) => a * b;

console.log(
  `The product of the tree count on each slope is ${treeCounts.reduce(product)}`
);
