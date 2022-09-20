import { expect, it } from "vitest";

import { bmiCalculator, markHigherBMI } from "./bmi.js";

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

// John:24.19
// Mark:27.31
// console.log("John:"+bmiCalculator(92,1.95));
// console.log("Mark:"+bmiCalculator(78,1.69));
