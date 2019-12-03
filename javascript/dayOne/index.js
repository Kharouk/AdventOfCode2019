const fuelCalculator = input => Math.floor(input / 3) - 2;

const totalFuelCalculator = input => {
  let sum = [];
  input.forEach(i => {
    sum.push(fuelCalculator(i));
  });
  return sum.reduce((a, b) => a + b, 0);
};

const solveDayOneChallenge = () => {
  require("fs").readFile(
    __dirname + "/adventchallenge.txt",
    "utf8",
    (err, data) => {
      if (err) throw err;

      const arrayOfMass = data.split("\n");
      return totalFuelCalculator(arrayOfMass);
    }
  );
};

module.exports = {
  fuelCalculator,
  totalFuelCalculator
};

solveDayOneChallenge();
