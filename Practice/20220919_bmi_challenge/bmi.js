function bmiCalculator(weight, height) {
  let calculation = weight / (height * height);
  return Number(calculation.toPrecision(4));
}

module.exports = {
  bmiCalculator: bmiCalculator,
};
