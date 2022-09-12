import { expect, it, vi } from "vitest";

vi.mock("./script.js");

import { showError, submitListener } from "./script.js";

//Read the value from an <input> that should be validated
// Invoke a rule (e.g. alphabetical, numeric) against said value
// If it is invalid, provide a meaningful error to the user
// Repeat for the next validatable in

it("should invalidate an empty username", () => {
  submitListener();
  // expect(submitListener).toHaveBeenCalledTimes(1);
  // showError();
  expect(showError).toHaveBeenCalled();

  // const mock = vi.fn().mockImplementation(submitListener);
  // submitListener();
  // console.log(mock);
  // expect(mock).toHaveBeenCalledTimes(1);
});
