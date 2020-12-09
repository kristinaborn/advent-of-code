class BootCode {
  constructor(instructions) {
    this.instructions = instructions;
  }

  repair() {
    const { executedInstructions } = this.run();

    const potentiallyCorruptInstructions = [
      ...executedInstructions,
    ].filter((instruction) => ["jmp", "nop"].includes(instruction.operation));

    for (const pci of potentiallyCorruptInstructions) {
      const originalOperation = pci.operation;

      pci.operation = originalOperation === "jmp" ? "nop" : "jmp";

      const { exitCode, accumulator } = this.run();

      if (exitCode === 0) {
        return accumulator;
      }

      pci.operation = originalOperation;
    }
  }

  run() {
    const executedInstructions = new Set();
    let exitCode = 0;
    let accumulator = 0;
    let index = 0;
    let instruction = this.instructions[index];

    while (instruction) {
      if (executedInstructions.has(instruction)) {
        exitCode = 1;
        break;
      }

      [accumulator, index] = instruction.execute(accumulator, index);

      executedInstructions.add(instruction);
      instruction = this.instructions[index];
    }

    return { accumulator, executedInstructions, exitCode };
  }
}

module.exports = BootCode;
