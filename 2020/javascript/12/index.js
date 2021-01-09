const fs = require("fs");
const Ship = require("./src/Ship");

const instructions = fs.readFileSync("./input.txt", "utf-8").split("\n");

const ship = new Ship([0, 0], "E");

for (const instruction of instructions) {
  const direction = instruction.substring(0, 1);
  const value = Number(instruction.substring(1));

  ship.move(direction, value);
}

console.log(ship.getManhattanDistance());
