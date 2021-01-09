const expect = require("chai").expect;
const Compass = require("../src/Compass");

describe("Compass", () => {
  describe("#turnClockwise", () => {
    it("turns correctly under 360 degrees", () => {
      const compass = new Compass("N");

      compass.turnClockwise(90);

      expect(compass.bearing).to.equal("E");
    });

    it("turns correctly past 360 degrees", () => {
      const compass = new Compass("W");

      compass.turnClockwise(180);

      expect(compass.bearing).to.equal("E");
    });
  });

  describe("#turnCounterClockwise", () => {
    it("turns correctly under 360 degrees", () => {
      const compass = new Compass("N");

      compass.turnCounterClockwise(90);

      expect(compass.bearing).to.equal("W");
    });

    it("turns correctly past 360 degrees", () => {
      const compass = new Compass("E");

      compass.turnCounterClockwise(180);

      expect(compass.bearing).to.equal("W");
    });
  });
});
