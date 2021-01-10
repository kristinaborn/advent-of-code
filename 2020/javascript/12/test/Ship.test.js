const expect = require("chai").expect;
const Ship = require("../src/Ship");
const Waypoint = require("../src/Waypoint");

describe("Ship", () => {
  describe("#move", () => {
    it("navigates correctly", () => {
      const instructions = ["F10", "N3", "F7", "R90", "F11"];
      const waypoint = new Waypoint([10, 1]);
      const ship = new Ship([0, 0], waypoint);

      for (const instruction of instructions) {
        const direction = instruction.substring(0, 1);
        const value = Number(instruction.substring(1));

        ship.move(direction, value);
      }

      expect(ship.manhattanDistance).to.equal(286);
    });
  });
});
