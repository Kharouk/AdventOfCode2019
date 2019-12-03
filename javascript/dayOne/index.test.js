const fuelCalculator = require("./index");

describe("Advent of Code Day One", () => {
  it("is able to deduce fuel from the given mass", () => {
    expect(fuelCalculator(12)).toEqual(2);
    expect(fuelCalculator(14)).toEqual(2);
    expect(fuelCalculator(1969)).toEqual(654);
    expect(fuelCalculator(100756)).toEqual(33583);
  });

  it("is able to multiple fuel sources, find the mass, and add the numbers", () => {
    expect(totalFuelCalculator([530, 1234, 666, 4])).toEqual(123452);
  });
});
