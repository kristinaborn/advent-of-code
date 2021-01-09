const expect = require("chai").expect;
const Ship = require("../src/Ship");

describe("Ship", () => {
  describe("#move", () => {
    it("navigates correctly", () => {
      const instructions = ["F10", "N3", "F7", "R90", "F11"];
      const ship = new Ship([0, 0], "E");

      for (const instruction of instructions) {
        const direction = instruction.substring(0, 1);
        const value = Number(instruction.substring(1));

        ship.move(direction, value);
      }

      expect(ship.getManhattanDistance()).to.equal(25);
    });
  });
});
