class TobogganTrajectory {
  TREE = "#";

  constructor(hill, slope) {
    this.hill = hill;
    this.treeCount = 0;
    this.slope = slope;
    this.xPos = 0;
    this.yPos = 0;
  }

  countTrees() {
    let row = this.hill[this.yPos];
    console.log(row);

    if (row[this.xPos % row.length] === this.TREE) {
      this.treeCount++;
    }

    this.setNextPosition();

    if (this.yPos > this.hill.length - 1) return;

    this.countTrees();
  }

  setNextPosition() {
    const [xAdjustment, yAdjustment] = this.slope;

    this.xPos += xAdjustment;
    this.yPos += yAdjustment;
  }
}

module.exports = TobogganTrajectory;
