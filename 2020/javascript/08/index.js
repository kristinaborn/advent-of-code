const fs = require("fs");
const BootCode = require("./src/BootCode");
const Instruction = require("./src/Instruction");

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n");

const instructions = lines.map((line) => {
  const [operation, argument] = line.split(" ");

  return new Instruction(operation, Number(argument));
});

const bootCode = new BootCode(instructions);

const { accumulator: part1Accumulator } = bootCode.run();
const part2Accumulator = bootCode.repair();

console.log(part1Accumulator);
console.log(part2Accumulator);
