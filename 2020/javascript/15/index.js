class MemoryGame {
  constructor(startingNumbers) {
    this.turn = 1;
    this.lastSpoken = null;
    this.memory = new Map();
    this.startingNumbers = startingNumbers;
  }

  play() {
    this.startingNumbers.forEach((n) => this.speak(n));

    while (this.turn < 2021) {
      const [mostRecent, secondMostRecent] = this.memory.get(this.lastSpoken);

      if (secondMostRecent === undefined) {
        this.speak(0);
      } else {
        this.speak(mostRecent - secondMostRecent);
      }
    }

    return this.lastSpoken;
  }

  speak(n) {
    if (!this.memory.has(n)) {
      this.memory.set(n, [this.turn]);
    } else {
      const [mostRecent] = this.memory.get(n);
      this.memory.set(n, [this.turn, mostRecent]);
    }

    this.lastSpoken = n;
    this.turn++;
  }
}

const mg = new MemoryGame([13, 16, 0, 12, 15, 1]);
console.log(mg.play());
