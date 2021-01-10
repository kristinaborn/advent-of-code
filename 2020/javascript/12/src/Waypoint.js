class Waypoint {
  constructor(position) {
    [this.x, this.y] = position;
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
        this.rotateCounterClockwise(value);
        break;
      case "R":
        this.rotateClockwise(value);
        break;
    }
  }

  reverse() {
    [this.x, this.y] = [this.y, this.x];
  }

  rotateClockwise(value) {
    switch (value) {
      case 90:
        this.reverse();
        this.y *= -1;
        break;
      case 180:
        this.x *= -1;
        this.y *= -1;
        break;
      case 270:
        this.reverse();
        this.x *= -1;
        break;
    }
  }

  rotateCounterClockwise(value) {
    switch (value) {
      case 90:
        this.reverse();
        this.x *= -1;
        break;
      case 180:
        this.x *= -1;
        this.y *= -1;
        break;
      case 270:
        this.reverse();
        this.y *= -1;
        break;
    }
  }
}

module.exports = Waypoint;
