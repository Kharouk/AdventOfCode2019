const fuelCalculator = input => Math.floor(input / 3) - 2;
const totalFuelCalculator = input => {
  let sum = 0;
  input.forEach(i => {
    sum += fuelCalculator(i);
  });
  return sum;
};

module.exports = {
  fuelCalculator,
  totalFuelCalculator
};
