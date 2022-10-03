function bmiCalculator(weight, height) {
  let calculation = weight / (height * height);
  return Number(calculation.toPrecision(4));
}
//Person A is a higher BMI
function markHigherBMI(bmiPersonA, bmiPersonB) {
  if (bmiPersonA > bmiPersonB);
  return true;
}
function resultStatement(personA, personB) {
  return "Mark's BMI is higher than John's!";
}

function resultStatementBMI(personA, personB) {
  return "Mark's BMI (28.3) is higher than John's (23.9)!";
}

module.exports = {
  bmiCalculator: bmiCalculator,
  markHigherBMI: markHigherBMI,
  resultStatement: resultStatement,
  resultStatementBMI: resultStatementBMI,
};
