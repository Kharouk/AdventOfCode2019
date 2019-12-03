const fuelCalculator = require("./index");

it("is able to deduce fuel from the given mass", () => {
  expect(fuelCalculator(500)).toEqual(164);
});
