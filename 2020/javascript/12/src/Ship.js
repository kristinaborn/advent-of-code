const Compass = require("./Compass");

class Ship {
  constructor(position, bearing) {
    [this.x, this.y] = position;
    this.compass = new Compass(bearing);
  }

  getManhattanDistance() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  move(direction, value) {
    switch (direction) {
      case "N":
        this.y += value;
        break;
      case "S":
        this.y -= value;
        break;
      case "E":
        this.x += value;
        break;
      case "W":
        this.x -= value;
        break;
      case "L":
        this.compass.turnCounterClockwise(value);
        break;
      case "R":
        this.compass.turnClockwise(value);
        break;
      case "F":
        this.move(this.compass.bearing, value);
    }
  }
}

module.exports = Ship;
