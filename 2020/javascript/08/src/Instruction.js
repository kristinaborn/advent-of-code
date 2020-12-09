class Instruction {
  constructor(operation, argument) {
    this.operation = operation;
    this.argument = argument;
  }

  execute(accumulator, index) {
    switch (this.operation) {
      case "acc":
        accumulator += this.argument;
        index++;
        break;
      case "jmp":
        index += this.argument;
        break;
      case "nop":
        index++;
        break;
    }

    return [accumulator, index];
  }
}

module.exports = Instruction;
