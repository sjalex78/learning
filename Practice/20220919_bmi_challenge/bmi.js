function bmiCalculator(weight, height) {
  let calculation = weight / (height * height);
  return Number(calculation.toPrecision(4));
}
//Person A is a higher BMI
function markHigherBMI(bmiPersonA, bmiPersonB) {
  if (bmiPersonA > bmiPersonB);
  return true;
}
module.exports = {
  bmiCalculator: bmiCalculator,
  markHigherBMI: markHigherBMI,
};
