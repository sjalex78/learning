import { expect, it } from "vitest";

import { bmiCalculator, markHigherBMI, resultStatement } from "./bmi.js";

let john = {
  weight: 92,
  height: 1.95,
};

let mark = {
  weight: 78,
  height: 1.69,
};

it("calculates the BMI of a person is calculated based on height and weight", () => {
  const result = bmiCalculator(mark.weight, mark.height);
  expect(result).toBe(27.31);
});

it("marks the BMI of Mark is greater than John", () => {
  let bmiMark = bmiCalculator(mark.weight, mark.height);
  let bmiJohn = bmiCalculator(john.weight, john.height);
  const result = markHigherBMI(bmiMark, bmiJohn);
  if (bmiMark > bmiJohn) true;
  expect(result).toBe(true);
});

it("states that Mark has a higher BMI than John", () => {
  const result = resultStatement(mark, john);
  expect(result).toBe("Mark's BMI is higher than John's!");
});

it("states that Mark has a higher BMI than John with BMI data", () => {
  const result = resultStatementBMI(mark, john);
  expect(result).toBe("Mark's BMI (28.3) is higher than John's (23.9)!");
});

// John:24.19
// Mark:27.31
// console.log("John:"+bmiCalculator(92,1.95));
// console.log("Mark:"+bmiCalculator(78,1.69));
