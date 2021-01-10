const fs = require("fs");
const Ship = require("./src/Ship");
const Waypoint = require("./src/Waypoint");

const instructions = fs.readFileSync("./input.txt", "utf-8").split("\n");

const waypoint = new Waypoint([10, 1]);
const ship = new Ship([0, 0], waypoint);

for (const instruction of instructions) {
  const direction = instruction.substring(0, 1);
  const value = Number(instruction.substring(1));

  ship.move(direction, value);
}

console.log(ship.manhattanDistance);
