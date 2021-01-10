class Ship {
  constructor(position, waypoint) {
    [this.x, this.y] = position;
    this.waypoint = waypoint;
  }

  get manhattanDistance() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  move(direction, value) {
    switch (direction) {
      case "F":
        this.x += this.waypoint.x * value;
        this.y += this.waypoint.y * value;
        break;
      default:
        this.waypoint.move(direction, value);
    }
  }
}

module.exports = Ship;
