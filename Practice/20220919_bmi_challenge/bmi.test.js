import { expect, it } from "vitest";

import { bmiCalculator } from "./bmi.js";

it("the BMI of a person is calculated based on height and weight", () => {
  let weight = 78;
  let height = 1.69;

  const result = bmiCalculator(weight, height);
  expect(result).toBe(27.31);
});
