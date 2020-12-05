class ReportRepair {
  constructor({ expenses, target }) {
    this.expenses = expenses;
    this.target = target;
  }

  pairProduct() {
    const copy = [...this.expenses];
    const pairs = this.expenses.flatMap((a) => copy.map((b) => [a, b]));
    const [a, b] = pairs.find(([a, b]) => a + b === this.target);

    return a * b;
  }

  tripleProduct() {
    const [copy1, copy2] = [[...this.expenses], [...this.expenses]];
    const triples = this.expenses.flatMap((a) =>
      copy1.flatMap((b) => copy2.map((c) => [a, b, c]))
    );
    const [a, b, c] = triples.find(([a, b, c]) => a + b + c === this.target);

    return a * b * c;
  }
}

module.exports = ReportRepair;
