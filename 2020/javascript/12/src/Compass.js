class Compass {
  constructor(bearing) {
    this.bearing = bearing;
  }

  get currentAngle() {
    return this.getAngle(this.bearing);
  }

  turnClockwise(degrees) {
    const newAngle = (this.currentAngle + degrees) % 360;

    this.bearing = this.getDirection(newAngle);
  }

  turnCounterClockwise(degrees) {
    const newAngle = (360 + this.currentAngle - degrees) % 360;

    this.bearing = this.getDirection(newAngle);
  }

  getAngle(direction) {
    const angles = {
      N: 0,
      E: 90,
      S: 180,
      W: 270,
    };

    return angles[direction];
  }

  getDirection(angle) {
    const directions = {
      0: "N",
      90: "E",
      180: "S",
      270: "W",
    };

    return directions[angle];
  }
}

module.exports = Compass;
